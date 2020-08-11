/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Map | Filter | Reduce')
/* coding examples */


var mapCallback = function(n) {
  return n * 2;
}

var map = [1, 2, 3, 4, 5].map(mapCallback);

/* array */
let numbers = [1, 2, 3, 4, 5];
log(numbers);

/* map function */
log("[].map");
var map = numbers.map(function(n) {
  return n * 2;
});
log(map);

/* filter function */
log("[].filter");
var filter = numbers.filter(function(n) {
  return n % 2 == 0;
});
log(filter);

/* reduce function */
log("[].reduce");
var reduce = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
});
log(reduce);

/* Filter examples */

const numberList = [1,2,3,4,5,6,7,8,9];

const pets = [
  { name: 'Popi', age: 12, type: 'dog' },
  { name: 'Flora', age: 2, type: 'cat' },
  { name: 'Rocky', age: 6, type: 'dog' },
  { name: 'Tommy', age: 4, type: 'dog' }
];

const filteredNumbers = numberList.filter(x => x < 5);
// log(numberList);
// log(filteredNumbers);

const dogs = pets.filter(x => x.type == 'dog');
// log(JSON.stringify(dogs));

const cats = pets.filter(x => x.type == 'cat');
// log(JSON.stringify(cats));

log(JSON.stringify(pets.filter(x => x.age > 5)));
