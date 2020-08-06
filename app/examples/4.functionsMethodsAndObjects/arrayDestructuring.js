/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Array Destructuring');

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

/* Array destructuring allow us to put values from an array */
const [anna, , joe, ...restOfNames] = names;

log(`${anna} ${joe}`);
log(restOfNames);
log(restOfNames.length);
