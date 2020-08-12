/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Trampoline for Recursion');
/* coding examples */

const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result();
  }
  return result;
}

const sum = (number, total = 0) => (
  number === 0
    ? total
    : () => sum(number - 1, total + number)
)

const tsum = trampoline(sum);
const r = tsum(100);
log(r);