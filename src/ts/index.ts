import GAME from './game';

const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const container = document.querySelector('.container') as Element;
let game = new GAME(canvas);
canvas.addEventListener('click', () => {
  if (game.gameOver === true) {
    game = new GAME(canvas);
    game.init();
  }
});
// const score = document.querySelector('button') as Element;
// score.addEventListener(
//   'click',
//   () => {
//     // This nesting is a bit out of hand
//     score.textContent = 'Pause Game';

//     game.init();
//     score.addEventListener('click', () => {
//       game.paused = !game.paused;
//       score.textContent = 'Resume Game';
//       score.addEventListener('click', () => {
//         score.textContent = game.paused === true ? 'Resume Game' : 'Pause Game';
//         game.loop();
//       });
//     });
//   },
//   { once: true },
// );
