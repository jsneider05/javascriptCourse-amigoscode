/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Object Descruturing');

const getUser = () => {
  return {
    name: 'John',
    surname: 'Doe',
    gender: 'male',
    address: {
      country: 'United States',
      city: 'California',
      postCode: 'CA',
      fullAddress: {
        doorNumber: 22,
        street: 'LA st'
      }
    },
    age: 29
  }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const { name : theName, age : theAge, address : { country : theCountry } } = user;
const { address : { fullAddress : { doorNumber : number } } } = user;

log(theName);
log(theAge);
log(theCountry);
log(number);

/* Example 2: For of iteration and destructuring */
const getPeople = () =>  {
  return  [{
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }]
};

const people = getPeople();
// const {name: n, family : { father : f } } = people[0];

// log(`${n} - ${f}`);

for (const {name: n, family: {father: f}} of people) {
  log('Name: ' + n + ', Father: ' + f);
}