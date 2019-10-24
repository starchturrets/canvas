import PLAYER from './player';
import { PILLARS } from './obstacles';

class COLLISIONS {
  canvas!: HTMLCanvasElement;

  player!: PLAYER;

  pillars!: PILLARS[];

  gameOver!: boolean;

  constructor(canvas: HTMLCanvasElement, player: PLAYER, pillars: PILLARS[]) {
    this.canvas = canvas;
    this.player = player;
    this.pillars = pillars;
    this.gameOver = false;
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
      //   if (player.x === obstacle.distanceFromLeft) this.gameOver = true;
      //   if (player.y === obstacle.safeHeight) this.gameOver = true;
      // if(this.collidesLeft(obstacle) && player ){
      //     this.gameOver = true;
      // }      //   if (player.distanceFromLeft === obstacle.distanceFromLeft && player.distanceFromTop > obstacle.safeHeight) {
      //     this.gameOver = true;
      //   }
    });
  };

  boundaryCheck = (canvas: HTMLCanvasElement, player: PLAYER) => {
    // If the square is at the top of the canvas, go no further
    if (player.y > canvas.height) {
      this.player.dy = 0;
    } else if (player.distanceFromTop < 0) {
      this.player.dy = 0;
      setTimeout(() => {
        this.player.dy = 1.2;
      }, 5);
    }
  };

  collidesLeft = (obstacle: PILLARS) => this.player.x === obstacle.distanceFromLeft;
}

export default COLLISIONS;
