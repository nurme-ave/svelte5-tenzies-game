// src\lib\stores\audioStore.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create the store with a default value
const audioStore = writable({
  isMuted: false
});

// Initialize the store with localStorage value if we're in the browser
if (browser) {
  const storedMute = localStorage.getItem('tenziesAppMuted');
  if (storedMute !== null) {
    audioStore.set({ isMuted: JSON.parse(storedMute) });
  }
}

// Create a convenience function to toggle mute
export function toggleMute() {
  audioStore.update((state) => {
    const newState = { ...state, isMuted: !state.isMuted };
    // Only access localStorage in the browser
    if (browser) {
      localStorage.setItem('tenziesAppMuted', JSON.stringify(newState.isMuted));
    }
    return newState;
  });
}

export default audioStore;
