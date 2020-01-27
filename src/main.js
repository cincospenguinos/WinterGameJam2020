import Phaser from 'phaser';

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

export const game = new Phaser.Game(gameConfig);
