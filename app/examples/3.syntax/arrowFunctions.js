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

/*
Use of this keyword:
Unlike regular functions, arrow functions do not have their own this. 
The value of this inside an arrow function remains the same throughout 
the lifecycle of the function and is always bound to the value of this 
in the closest non-arrow parent function.
*/
let me = { 
  name: "Ashutosh Verma", 
  thisInArrow:() => { 
  log("My name is " + this.name); // no 'this' binding here
    // My name is undefined
  }, 
  thisInRegular(){ 
  log("My name is " + this.name); // 'this' binding works here 
    // My name is Ashutosh Verma
  } 
};
me.thisInArrow(); 
me.thisInRegular();

/*
Using new keyword:
Regular functions created using function declarations or expressions 
are constructible and callable. Since regular functions are constructible, 
they can be called using the new keyword.
However, the arrow functions are only callable and not constructible, 
i.e arrow functions can never be used as constructor functions. Hence, 
they can never be invoked with the new keyword.
*/
let add = (x, y) => log(x + y);
new add(2,3);
// Uncaught TypeError: add is not a constructor
//  at <anonymous>:2:1

/* 
No duplicate named parameters:
With arrow functions, duplicate named arguments are always, 
regardless of strict or non-strict mode, invalid.
*/
(x, x) => {}
// SyntaxError: duplicate argument names not allowed in this context
