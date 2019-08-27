export class PILLARS {
  constructor (ctx, left, canvasWidth) {
    this.draw = () => {
      const { ctx, width, height } = this
      this.ctx.beginPath()
      this.ctx.rect(this.distanceFromLeft, canvas.height - height, this.width, this.height)
      ctx.fillStyle = 'blue'
      ctx.fill()
      ctx.closePath()
      this.distanceFromLeft += this.dl
    }
    this.ctx = ctx
    this.dl = -3
    this.height = Math.floor(Math.random() * (200 - 50 + 1) + 50)
    this.width = 10
    this.distanceFromLeft = left
  }
}
// # sourceMappingURL=pillars.js.map
