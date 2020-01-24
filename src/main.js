import Phaser from 'phaser';

const gameConfig = {
	type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [],
};

export const game = new Phaser.Game(gameConfig);
