import { PILLARS } from './obstacles';
import PLAYER from './player';
import COLLISIONS from './collisions';

export default class {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  player: PLAYER;

  pillars: PILLARS[];

  height: number;

  width: number;

  score: number = 0;

  constructor(_canvas: HTMLCanvasElement) {
    this.canvas = _canvas;
    this.ctx = this.canvas.getContext('2d')!;
    this.player = new PLAYER(this.ctx, 120, 10, 12);
    this.pillars = [];
    for (let i = 0; i < 6; i += 1) {
      this.pillars.push(new PILLARS(this.canvas, this.canvas.width + i * 69));
    }
    this.height = _canvas.height;
    this.width = _canvas.width;
  }

  init = () => {
    this.loop();
    this.canvas.addEventListener('click', this.player.jump);
    // this.canvas.addEventListener('touchstart', this.player.jump);
  };

  // The game loop
  loop = () => {
    const { height, width } = this;
    this.ctx.clearRect(0, 0, width, height);

    this.pillars.forEach((p: PILLARS) => p.draw());
    this.player.draw();
    const checker = new COLLISIONS(this.canvas, this.player, this.pillars);
    checker.check();
    if (checker.gameOver === false) requestAnimationFrame(this.loop);
  };

  collisionDetection = () => {
    const { player, pillars } = this;

    // Since there are multiple pillars, loop over them individually and check collisions
    pillars.forEach((pillar: PILLARS, index: number) => {
      // console.log(player.distanceFromLeft, pilla.)
      // if (
      //   pillar.distanceFromLeft - pillar.width === player.distanceFromLeft &&
      //   player.distanceFromLeft + player.size <= pillar.distanceFromLeft &&
      //   pillar.distanceFromLeft >= player.distanceFromLeft
      // ) {
      // if (player.distanceFromTop + player.size >= pillar.safeHeight) this.gameOver = true;
      // }
      // Destroy pillars if they hit the edge, then replace them
      if (pillar.distanceFromLeft + pillar.width < 0) {
        this.pillars.splice(index, 1);
        this.pillars.push(new PILLARS(this.canvas, this.canvas.width));
      }
      // if (
      //   this.canvas.height - pillar.height === player.distanceFromTop &&
      //   pillar.distanceFromLeft < player.size + player.distanceFromLeft &&
      //   pillar.distanceFromLeft > player.distanceFromLeft
      // ) {
      //   this.gameOver = true;
      // }
      // if (this.canvas.height - pillar.height <= player.size + player.distanceFromTop) {
      //   if (
      //     pillar.distanceFromLeft <= player.distanceFromLeft + player.size &&
      //     pillar.distanceFromLeft >= player.distanceFromLeft - player.size
      //   ) {
      //     this.gameOver = true;
      //   }
      // }
      // if (pillar.distanceFromLeft === 10) {
      //   const scoreDiv = document.querySelector('div#score') as HTMLElement;
      //   this.score += 1;
      //   scoreDiv!.textContent = `Score is: ${this.score}`;
      // }
    });
  };
}
