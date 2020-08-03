/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Arrow Functions');

/*
const hello = function() {
  const es6 = 'ES6';
  return `Hello ${es6}`;
};
*/
const hello = () => {
  const es6 = 'ES6';
  return `Hello ${es6}`;
};

/*
const powers = [1,2,3,4,5].map(function(number, index) {
  return Math.pow(number, index);
});
*/
const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));

/*
const add = function(n1, n2) {
  return n1 + n2;
};
*/
const add = (n1, n2) => n1 + n2;

/*
const milesToKm = function(miles) {
  return miles * 1.60934;
};
*/
const milesToKm = miles => miles * 1.60934;

/* No arguments */
const greet = _ => log("hi");
greet();

log(hello());
log(powers);
log(add(100,100));
log(milesToKm(100));
