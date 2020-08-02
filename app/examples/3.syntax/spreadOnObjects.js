/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Spread on Objects');

const address = {
  city: 'LA',
  country: 'USA',
  postCode: 'LA44'
};

const name = {
  firstName: 'Andy',
  lastName: 'Jones'
};

/* You see this a lot with right react applications to pass down 
    information from the main component to the sub-components
    via props */

const person = { ...address, ...name };

log(JSON.stringify(person, null, 2));
