import GAME from './game';

const canvas = document.querySelector('#canvas') as HTMLCanvasElement;

const game = new GAME(canvas);
canvas.addEventListener('click', game.init, { once: true });
