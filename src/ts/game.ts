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

  paused: boolean;

  constructor(_canvas: HTMLCanvasElement) {
    this.canvas = _canvas;
    this.ctx = this.canvas.getContext('2d')!;
    this.player = new PLAYER(this.ctx, 120, 10, 12);
    this.pillars = [];
    for (let i = 0; i < 6; i += 1) {
      this.pillars.push(new PILLARS(this.canvas, this.canvas.width + i * 69));
    }
    this.paused = false;
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
    const checker = new COLLISIONS(this.canvas, this.player, this.pillars, this.score);
    checker.check();
    this.score = checker.score;
    if (checker.gameOver === false && this.paused === false) {
      requestAnimationFrame(this.loop);
      document.querySelector('#score')!.textContent = `Score is: ${checker.score}`;
    }
  };

  pause = (ev: Event) => {
    const target = ev.target as Element;
    this.paused = true;
    target.textContent = 'Resume Game';
  };
}
