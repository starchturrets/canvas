import { PILLARS } from './obstacles';
import PLAYER from './player';

export default class {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  player: PLAYER;

  pillars: PILLARS[];

  height: number;

  width: number;

  gameOver: boolean;

  constructor(_canvas: HTMLCanvasElement) {
    this.canvas = _canvas;

    this.ctx = this.canvas.getContext('2d')!;
    this.player = new PLAYER(this.ctx, 120, 10, 12);
    this.pillars = [];
    for (let i = 0; i < 8; i += 1) {
      this.pillars.push(new PILLARS(this.canvas, i * 50));
    }
    this.height = _canvas.height;
    this.width = _canvas.width;
    this.gameOver = false;
  }

  init = () => {
    this.loop();
    this.canvas.addEventListener('click', this.player.jump);
  };

  // The game loop
  loop = () => {
    const { height, width, gameOver } = this;
    this.ctx.clearRect(0, 0, width, height);

    this.pillars.forEach((p: PILLARS) => p.draw());
    this.player.draw();

    this.collisionDetection();
    if (!gameOver) requestAnimationFrame(this.loop);
  };

  collisionDetection = () => {
    const { player, pillars } = this;

    // Check if the player black has hit the bottom of the canvas, and stop it from falling further
    if (
      player.distanceFromTop + player.dy + player.size > this.canvas.height ||
      // If the square is at the top of the canvas, go no further
      player.distanceFromTop + player.dy < 0
    ) {
      player.dy = 0;
    }
    // Since there are multiple pillars, loop over them individually and check collisions
    pillars.forEach((pillar: PILLARS, index: number) => {
      const totalHeight = player.distanceFromTop + player.size;
      // Move pillars to the right if they hit the edge
      if (pillar.distanceFromLeft + pillar.width < 0) {
        this.pillars[index] = new PILLARS(this.canvas, this.canvas.width);
        pillars[index].distanceFromLeft = this.canvas.width;
      }
      console.log(this.canvas.height - pillar.height < player.distanceFromTop);
      if (
        this.canvas.height - pillar.height < player.distanceFromTop &&
        pillar.distanceFromLeft < player.size + player.distanceFromLeft &&
        pillar.distanceFromLeft > player.distanceFromLeft
      ) {
        this.gameOver = true;
      }
      if (this.canvas.height - pillar.height <= player.size + player.distanceFromTop) {
        if (
          pillar.distanceFromLeft <= player.distanceFromLeft + player.size &&
          pillar.distanceFromLeft >= player.distanceFromLeft - player.size
        ) {
          this.gameOver = true;
        }
      }
    });
  };
}

