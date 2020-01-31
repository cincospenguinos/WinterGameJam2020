import Phaser from 'phaser';
import CONSTANTS from './constants/index.js';
import MenuScene from './scenes/menuScene/menuScene.js';
import PlayScene from './scenes/playScene/playScene.js';
import EndScene from './scenes/endScene/endScene.js';

const gameConfig = {
	type: Phaser.AUTO,
  width: 1600,
  height: 800,
  parent: 'game-container',
  scene: [MenuScene, PlayScene, EndScene],
};

export const game = new Phaser.Game(gameConfig);
