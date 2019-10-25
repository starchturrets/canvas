class PILLARS {
  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  distanceFromLeft: number;

  dl: number;

  height: number;

  secondPillarHeight: number;

  safeHeight: number;

  width: number;

  x: number;

  counted: boolean;

  fillStyle: string;

  constructor(_canvas: HTMLCanvasElement, left: number) {
    this.canvas = _canvas;
    this.ctx = _canvas.getContext('2d')!;
    this.dl = -this.canvas.width / 400;
    this.height = Math.floor((Math.random() * this.canvas.height) / 4 + 50);
    this.secondPillarHeight = this.canvas.height - this.height - this.canvas.height / 4;

    this.counted = false;
    this.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    this.safeHeight = this.canvas.height - this.height;
    this.width = this.canvas.width / 14;
    this.distanceFromLeft = left;
    this.x = this.width + this.distanceFromLeft;
  }

  draw = () => {
    const { ctx, width, height } = this;
    this.ctx.beginPath();
    this.distanceFromLeft += this.dl;
    this.ctx.rect(this.distanceFromLeft, this.canvas.height - height, width, height);
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    this.ctx.rect(this.distanceFromLeft, 0, width, this.secondPillarHeight);
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.closePath();
    this.x = this.width + this.distanceFromLeft;
  };

  isSafe = (y: number, distanceFromTop: number) => {
    const bool: boolean = distanceFromTop > this.secondPillarHeight && y < this.canvas.height - this.height;
    return bool;
  };
}

export { PILLARS };
