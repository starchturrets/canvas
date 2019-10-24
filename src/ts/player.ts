export default class PLAYER {
  ctx: CanvasRenderingContext2D;

  distanceFromLeft: number;

  // used when rendering
  distanceFromTop: number;

  size: number;

  dy: number;

  // used when checking for collisions
  y: number;

  x: number;

  constructor(ctx: CanvasRenderingContext2D, distanceFromLeft: number, distanceFromTop: number, size: number) {
    this.ctx = ctx;
    this.dy = 1.2;
    this.distanceFromLeft = distanceFromLeft;
    this.y = distanceFromTop + size;
    this.x = distanceFromLeft + size;
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
    this.y = this.distanceFromTop + this.size;
    this.x = this.distanceFromLeft + this.size;
  };

  jump = () => {
    this.dy = -3;
    setTimeout(() => {
      this.dy = 1.2;
    }, 300);
  };
}
