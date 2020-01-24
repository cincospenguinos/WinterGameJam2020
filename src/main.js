import Phaser from 'phaser';

const gameConfig = {
	type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [],
  scale: {
  	mode: Phaser.Scale.NONE,
  	autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {},
};

export const game = new Phaser.Game(gameConfig);
