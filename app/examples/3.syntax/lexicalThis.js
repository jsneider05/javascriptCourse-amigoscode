/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Lexical this');

/* bind this */
/* that pattern */
/* arrow function (best form) */
const person = {
  name: 'Alex',
  cars: ['ferrari', 'lambo'],
  /* In this case we cant use an arrow function because we lose
      the contex of the "this" keyword, we dont know which person
      cars we are referencing to */
  toString: function () {
    // log(`${this.name} has ${this.cars}`);

    /* this.cars.forEach(function (car) {
      log(`${this.name} has ${car}`);
    }.bind(this)); */

    /* const that = this;
    this.cars.forEach(function (car) {
      log(`${that.name} has ${car}`);
    }); */

    /* The easy way to fix this simply place an arrow function 
        in this way we bind to the actual object of the "this" keyword */
    this.cars.forEach( car => {
      log(`${this.name} has ${car}`);
    });
  }
}

person.toString();
