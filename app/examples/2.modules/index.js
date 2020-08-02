/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import {divide, add} from '../examples/2.modules/Math';
import * as Math from '../examples/2.modules/Math';

import Animal from '../examples/2.modules/Animal';
logTitle('Named Exports / Import');
/* coding examples */

log(Math.add(2,2));
log(Math.divide(4,2));

log(add(2,2));
log(divide(4,2));

/* Default exports / imports */
var animal = new Animal();
log(animal.getClassType());







