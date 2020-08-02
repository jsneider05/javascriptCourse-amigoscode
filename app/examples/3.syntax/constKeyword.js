/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Const keyword');

let name = 'Maria';
log(`${name} - ${typeof name}`);
name = {};
log(`${name} - ${typeof name}`);
name = 2;
log(`${name} - ${typeof name}`);

/* ************************* */

const person = {};

person['name'] = 'Maria';

log(person.name);

const array = [];
array.push('Maria from Array');

log(array[0]);
