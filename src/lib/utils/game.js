// Creates a new die object with random value and isHeld status
export function generateNewDie() {
  return {
    value: Math.ceil(Math.random() * 6),
    isHeld: false
  };
}

// Generates an array of 10 new dice
export function generateNewDiceArray() {
  return Array(10)
    .fill()
    .map(() => generateNewDie());
}

// Saves the best score to localStorage
export function saveBestScore(score) {
  try {
    localStorage.setItem('bestScore', score.toString());
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}
