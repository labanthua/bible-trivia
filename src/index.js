import './index.css';
import numeral from 'numeral';
import { Verse } from './chapters/verse.js';

const courseValue = numeral(100).format('$0,00.00');
        
debugger; // eslint-disable-line no-debugger
console.log(`I would Pay ${courseValue} for this Awesome Bible Trivia!!!!, chapter`); // eslint-disable-line no-console
 
let verse = new Verse(1);
console.log(verse.id); // eslint-disable-line no-console
console.log(location.href);// eslint-disable-line no-console
        




