/* 
Key concepts:
 - AudioContext: The main audio system that handles all sound generation
 - OscillatorNode: Generates the actual sound waves at specified frequencies
 - GainNode: Controls volume and volume changes over time
 - frequency: Determines the pitch of the sound (higher number = higher pitch)
 - gain: Controls volume (0 = silence, 1 = full volume)
 - The audio graph: Oscillator → GainNode → Speakers (destination)
*/

import audioStore from '$lib/stores/audioStore';
import { get } from 'svelte/store';

// AudioContext is a singleton (only one instance) that handles all audio operations
// We keep it as a global variable to reuse the same context for all sounds
let audioContext;

// Initialize audio context when user first interacts with the page
// This is required by browsers to prevent unwanted autoplaying sounds
export function initAudioContext() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      return audioContext;
    } catch (error) {
      console.error('Web Audio API is not supported in this browser', error);
    }
  }
  return audioContext;
}

// Generate a short click sound for dice interaction
export const generateClickSound = async () => {
  // Check if sound is muted
  if (get(audioStore).isMuted) return;

  const context = initAudioContext();
  if (!context) return;

  // Oscillator generates the actual sound wave
  const oscillator = context.createOscillator();
  // GainNode controls the volume of the sound
  const gainNode = context.createGain();

  // Create an audio chain: Oscillator -> GainNode -> Speakers
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  // Set the frequency (pitch) of the sound - 800Hz is a high-pitched click
  oscillator.frequency.setValueAtTime(800, context.currentTime);

  // Set initial volume to 0.05 (5% of max volume)
  gainNode.gain.setValueAtTime(0.05, context.currentTime);
  // Fade out the sound quickly for a clean finish
  gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);

  // Start playing the sound immediately
  oscillator.start();
  // Stop after 0.1 seconds for a short click effect
  oscillator.stop(context.currentTime + 0.1);
};

// Play a victory melody when the game is won
export const playWinSound = async () => {
  // Check if sound is muted
  if (get(audioStore).isMuted) return;

  const context = initAudioContext();
  if (!context) return;
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  // Set up the same audio chain as above
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  // Create a simple ascending melody using musical notes
  // Each setValueAtTime creates a note in our victory melody
  oscillator.frequency.setValueAtTime(440, context.currentTime); // A4 note
  oscillator.frequency.setValueAtTime(554.37, context.currentTime + 0.2); // C#5 note
  oscillator.frequency.setValueAtTime(659.25, context.currentTime + 0.4); // E5 note

  // Set initial volume to 0.1 (10% of max volume)
  gainNode.gain.setValueAtTime(0.1, context.currentTime);
  // Fade out over 0.6 seconds for a smooth ending
  gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.6);

  // Start playing immediately
  oscillator.start();
  // Stop after 0.6 seconds when melody is complete
  oscillator.stop(context.currentTime + 0.6);
};
