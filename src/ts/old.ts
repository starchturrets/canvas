// let x = 10;
// let y = canvas.height / 2 - 30;
// let dx = 0;
// let dy = 1;
// let int: number;
// let pillarPos = canvas.width - 10;
// let ballRadius = 15;
// let pillarHeight = 100;
// let end = false;
// const player = () => {
//   context.beginPath();
//   context.rect(x, y, ballRadius, ballRadius);
//   context.fillStyle = 'red';
//   context.fill();
//   context.closePath();
// };

// const draw = () => {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   player();
//   x += dx;
//   y += dy;
//   if (y + dy > canvas.height - ballRadius || y + dy < 0) {
//     dy = 0;
//   }

//   context.beginPath();
//   context.rect(pillarPos, canvas.height - pillarHeight, 20, pillarHeight);
//   context.fillStyle = 'blue';
//   context.fill();
//   context.closePath();
//   pillarPos -= 1;
//   if (pillarPos < -100) {
//     pillarPos = canvas.width - 10;
//     pillarHeight = Math.floor(Math.random() * (200 - 50 + 1) + 50);
//   }
//   if (
//     pillarPos < 10 + ballRadius &&
//     y > canvas.height - pillarHeight - ballRadius
//   ) {
//     console.log('Game over');
//     end = true;
//   }
//   if (!end) {
//     int = requestAnimationFrame(draw);
//   }
// };

// draw();
// const jump = () => {
//   console.log('jumping');

//   dy = -2;
//   setTimeout(() => {
//     dy = 1.69;
//   }, 300);
// };
// canvas.addEventListener('click', jump);
// const drawPillars = () => {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.beginPath();
//   context.rect(0, y, ballRadius, ballRadius);
//   context.fillStyle = 'black';
//   context.fill();
//   context.closePath();
// };
// // int = setInterval(draw, 1);

// requestAnimationFrame(draw);
