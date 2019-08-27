export default class PLAYER {
  constructor (ctx, distanceFromLeft, distanceFromTop, size) {
    this.draw = () => {
      const { ctx, distanceFromLeft, distanceFromTop, size } = this
      this.ctx.beginPath()
      this.ctx.rect(distanceFromLeft, distanceFromTop, size, size)
      ctx.fillStyle = 'red'
      ctx.fill()
      ctx.closePath()
      this.distanceFromTop += this.dy
    }
    this.jump = () => {
      this.dy = -5
      setTimeout(() => {
        this.dy = 4
      }, 300)
    }
    this.ctx = ctx
    this.dy = 3
    this.distanceFromLeft = distanceFromLeft
    this.distanceFromTop = distanceFromTop
    this.size = size
  }
}
// # sourceMappingURL=player.js.map
