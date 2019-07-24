import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,00.00');
debugger; // eslint-disable-line no-debugger
console.log(`I would Pay ${courseValue} for this Awesome Bible Trivia`); // eslint-disable-line no-console