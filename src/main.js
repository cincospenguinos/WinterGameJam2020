import Phaser from 'phaser';
import CONSTANTS from './constants/index.js';

const gameConfig = {
	type: Phaser.AUTO,
  width: 1600,
  height: 800,
  parent: 'game-container',
  scene: [{
  	preload: () => {},
  	create: () => {},
  	update: () => {},
  }],
};

console.log(CONSTANTS);

export const game = new Phaser.Game(gameConfig);
