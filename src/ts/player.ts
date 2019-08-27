export default class PLAYER {
  ctx: CanvasRenderingContext2D;

  distanceFromLeft: number;

  distanceFromTop: number;

  size: number;

  dy: number;

  constructor(ctx: CanvasRenderingContext2D, distanceFromLeft: number, distanceFromTop: number, size: number) {
    this.ctx = ctx;
    this.dy = 3;
    this.distanceFromLeft = distanceFromLeft;
    this.distanceFromTop = distanceFromTop;
    this.size = size;
  }

  draw = () => {
    const { ctx, distanceFromLeft, distanceFromTop, size } = this;
    this.ctx.beginPath();
    this.ctx.rect(distanceFromLeft, distanceFromTop, size, size);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    this.distanceFromTop += this.dy;
  };

  jump = () => {
    this.dy = -5;
    setTimeout(() => {
      this.dy = 4;
    }, 300);
  };
}
