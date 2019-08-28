class PILLARS {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  distanceFromLeft: number;

  dl: number;

  height: number;

  width: number;

  constructor(_canvas: HTMLCanvasElement, left: number) {
    this.canvas = _canvas;
    this.ctx = _canvas.getContext('2d')!;
    this.dl = -3;
    this.height = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    this.width = 17;
    this.distanceFromLeft = left;
  }

  draw = () => {
    const { ctx, width, height } = this;
    this.ctx.beginPath();
    this.ctx.rect(this.distanceFromLeft, this.canvas.height - height, width, height);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    this.distanceFromLeft += this.dl;
  };
}

export { PILLARS };
