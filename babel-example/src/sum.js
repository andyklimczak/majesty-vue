import { name } from './client';

const pizza = 10;
const beer = 5;

const sum = (a, b) => a + b + '$';
console.log(`${name}: You have to pay ${sum(pizza, beer)}`);
