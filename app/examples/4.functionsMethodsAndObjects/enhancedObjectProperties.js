/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Enhanced Object Properties');

/* const calculator = name => {
  return {
    name: name,
    add: function (n1, n2) {
      return n1 + n2;
    }
  }
} */

/* Enhanced */
/* We can construct the property name as we wish */
const pricePropName = "PRICE";

const calculator = (name, price) => {
  return {
    name,
    add(n1, n2) {
      return n1 + n2;
    },
    [pricePropName.toLowerCase()] : price
  }
}

const calc = calculator('casio', 19.99);

log(calc.name);
log(calc.add(20, 20));
log(calc.price);
