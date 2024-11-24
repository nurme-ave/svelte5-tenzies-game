import { browser } from '$app/environment';
import { playWinSound } from '$lib/utils/sounds';

interface Die {
  value: number;
  isHeld: boolean;
}

export class TenziesGame {
  dice = $state<Die[]>([]);
  rolls = $state(0);
  bestScore = $state(Infinity);
  gameWon = $state(false);

  constructor() {
    if (browser) {
      this.dice = this.generateNewDiceArray();
      this.loadBestScore();
    }
  }

  private generateNewDie(): Die {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    };
  }

  private generateNewDiceArray(): Die[] {
    return Array(10)
      .fill(null)
      .map(() => this.generateNewDie());
  }

  private loadBestScore() {
    try {
      const savedScore = localStorage.getItem('bestScore');
      if (savedScore !== null && savedScore !== '0') {
        this.bestScore = parseInt(savedScore);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }

  private saveBestScore() {
    if (!browser) return;
    try {
      localStorage.setItem('bestScore', this.bestScore.toString());
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  roll() {
    this.rolls++;
    this.dice = this.dice.map((die) => (die.isHeld ? die : this.generateNewDie()));
    this.checkWinCondition();
  }

  toggleDie(die: Die) {
    die.isHeld = !die.isHeld;
    this.checkWinCondition();
  }

  reset() {
    this.dice = this.generateNewDiceArray();
    this.rolls = 0;
    this.gameWon = false;
    this.saveBestScore();
  }

  private checkWinCondition() {
    const allDiceHeld = this.dice.every((die) => die.isHeld);
    const firstValue = this.dice[0].value;
    const allSameValue = this.dice.every((die) => die.value === firstValue);
    this.gameWon = allDiceHeld && allSameValue;

    if (this.gameWon && browser) {
      playWinSound();
      if (this.bestScore === Infinity || this.rolls < this.bestScore) {
        this.bestScore = this.rolls;
        this.saveBestScore();
      }
    }
  }
}

export const gameInstance = browser ? new TenziesGame() : null;
