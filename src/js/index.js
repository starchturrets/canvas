import PLAYER from './player';
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
class PILLARS {
    constructor(ctx) {
        this.draw = () => {
            const { ctx, width, height } = this;
            this.ctx.beginPath();
            this.ctx.rect(this.distanceFromLeft, canvas.height - height, this.width, this.height);
            ctx.fillStyle = 'blue';
            ctx.fill();
            ctx.closePath();
            this.distanceFromLeft += this.dl;
        };
        this.ctx = ctx;
        this.dl = -3;
        this.height = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        this.width = 10;
        this.distanceFromLeft = canvas.width - this.width;
    }
}
class GAME {
    constructor(ctx) {
        this.init = () => {
            this.loop();
            canvas.addEventListener('click', this.player.jump);
        };
        // The game loop
        this.loop = () => {
            const { height, width, gameOver } = this;
            context.clearRect(0, 0, width, height);
            this.player.draw();
            this.pillars.draw();
            this.collisionDetection();
            if (!gameOver)
                requestAnimationFrame(this.loop);
        };
        this.collisionDetection = () => {
            const { player, pillars } = this;
            // Check if the player black has hit the bottom of the canvas, and stop it from falling further
            if (player.distanceFromTop + player.dy + player.size > canvas.height ||
                // If the square is at the top of the canvas, go no further
                player.distanceFromTop + player.dy < 0) {
                player.dy = 0;
            }
            // Move pillars to the right if they hit the edge
            if (pillars.distanceFromLeft < 0) {
                this.pillars = new PILLARS(this.ctx);
                pillars.distanceFromLeft = canvas.width;
            }
            if (pillars.distanceFromLeft < player.distanceFromLeft + player.size &&
                player.distanceFromTop + player.size > canvas.height - pillars.height) {
                this.gameOver = true;
            }
        };
        this.ctx = ctx;
        this.player = new PLAYER(context, 10, 10, 12);
        this.pillars = new PILLARS(context);
        this.height = canvas.height;
        this.width = canvas.width;
        this.gameOver = false;
    }
}
const game = new GAME(context);
game.init();
//# sourceMappingURL=index.js.map