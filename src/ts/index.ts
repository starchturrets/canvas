import GAME from './game';

const canvas = document.querySelector('#canvas') as HTMLCanvasElement;

const game = new GAME(canvas);
canvas.addEventListener('click', game.init, { once: true });
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
