class PILLARS {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  distanceFromLeft: number;

  dl: number;

  height: number;

  safeHeight: number;

  width: number;

  constructor(_canvas: HTMLCanvasElement, left: number) {
    this.canvas = _canvas;
    this.ctx = _canvas.getContext('2d')!;
    this.dl = -1;
    this.height = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    this.safeHeight = this.canvas.height - this.height;
    this.width = 20;
    this.distanceFromLeft = left;
  }

  draw = () => {
    const { ctx, width, height } = this;
    this.ctx.beginPath();
    this.distanceFromLeft += this.dl;
    this.ctx.rect(this.distanceFromLeft, this.canvas.height - height, width, height);
    ctx.fillStyle = 'blue';
    ctx.fill();
    this.ctx.rect(this.distanceFromLeft, 20, width, height);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
  };
}

export { PILLARS };
