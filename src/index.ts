import './styles.css';
import { getRandomInt } from './utils';

let guessCount = 0;
const squares = document.querySelectorAll('.square');
const count = document.getElementById('count') as HTMLSpanElement;
const secret = getRandomInt(1, 6);

squares.forEach((sq, idx) => {
    const el = sq as HTMLDivElement;
    if ((idx + 1) === secret) {
        el.dataset.secret = "true";
    }
    sq.addEventListener('click', handleClick);
})

function handleClick() {
    const el = this as HTMLDivElement;
    console.log('Got the click', this);
    guessCount++;
    count.innerHTML = `<small>You have made <b>${guessCount}</b> guesses</small>`;
    if (el.dataset.secret) {
        el.classList.add('winner');
        squares.forEach(sq => sq.removeEventListener('click', handleClick));
    } else {
        el.classList.add('loser');
        el.removeEventListener('click', handleClick);


    }
};
/*import { add, PI } from './utils';
console.log('Ready to Party');

console.log(add(10, 18));

console.log(PI);*/