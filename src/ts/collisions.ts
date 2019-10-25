import PLAYER from './player';
import { PILLARS } from './obstacles';

class COLLISIONS {
  canvas!: HTMLCanvasElement;

  player!: PLAYER;

  pillars!: PILLARS[];

  gameOver!: boolean;

  score: number;

  highScore: number;

  constructor(canvas: HTMLCanvasElement, player: PLAYER, pillars: PILLARS[], score: number) {
    this.canvas = canvas;
    this.player = player;
    this.pillars = pillars;
    this.gameOver = false;
    this.score = score;
    this.highScore = localStorage.score || 0;
    this.highScore = this.score > this.highScore ? this.score : this.highScore;
    localStorage.score = this.highScore;
  }

  check = () => {
    const { canvas, pillars, player } = this;
    let { gameOver } = this;
    console.log('test');
    this.boundaryCheck(canvas, player);
    pillars.forEach((obstacle: PILLARS, index: number) => {
      // Constantly replace pillars as they hit the screen boundary
      if (obstacle.distanceFromLeft + obstacle.width < 0) {
        this.pillars.splice(index, 1);
        this.pillars.push(new PILLARS(this.canvas, this.canvas.width));
      }
      if (player.x > obstacle.x && obstacle.counted === false) {
        // eslint-disable-next-line no-param-reassign
        obstacle.counted = true;
        this.score += 1;
      }
      //   Check if player is inside the space between pillars
      if (!obstacle.isSafe(player.y, player.distanceFromTop)) {
        // Then check if player is hitting said pillars
        switch (true) {
          case player.x > obstacle.distanceFromLeft && obstacle.counted === false: {
            // eslint-disable-next-line no-param-reassign
            obstacle.counted = true;
            this.score += 1;
            break;
          }
          case player.distanceFromLeft <= obstacle.x && player.x >= obstacle.x:
          case player.x <= obstacle.x && player.x >= obstacle.distanceFromLeft:
          case player.x === obstacle.distanceFromLeft: {
            this.gameOver = true;
            break;
          }

          default:
            break;
        }
        // if (player.x > obstacle.distanceFromLeft) this.score += 1;
      }
    });
  };

  boundaryCheck = (canvas: HTMLCanvasElement, player: PLAYER) => {
    // If the square is at the top of the canvas, go no further
    if (player.y > canvas.height) {
      this.player.dy = 0;
    } else if (player.distanceFromTop < 25) {
      this.player.dy = 0;
      setTimeout(() => {
        // Do this because otherwise the player gets stuck on the top of the canvas
        this.player.dy = 1.2;
      }, 5);
    }
  };

  collidesLeft = (obstacle: PILLARS) => this.player.x === obstacle.distanceFromLeft;
}

export default COLLISIONS;
