/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Break and Continue");
/* coding examples */

let name;
let age;

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var persons = [
  { name: "Alex", age: 22 },
  { name: "Maria", age: 30 },
  new Person("Joan", 25),
  new Person("Angie", 22)
];

/* for (let i = 0; i < persons.length; i++) {
  const name = persons[i].name;
  const age = persons[i].age;
  log(`${name} - ${age}`);
} */

var number = 0;

while (number < 5) {
  number ++;

  if (number < 5) {
    continue;
  }
  log(number);
}

/* var i = 0;
do {
  i ++;
  log(i);
} while (i < 5); */
