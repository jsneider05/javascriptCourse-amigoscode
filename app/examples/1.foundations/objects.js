/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Arrays");
/* coding examples */

var person = {
  name: "Maria Jones",
  age: 21,
  hasDriverLicence: true,
  dateOfBirth: "01/01/2000",
  address: {
    firstLine: "123",
    postCode: "SE1",
    country: "England"
  }
};

log(JSON.stringify(person));
log(Object.values(person));
log(JSON.stringify(person.address));

log(`Name: ${person.name}, type: ${typeof(person.name)}`);
log(`Age: ${person.age}, type: ${typeof(person.age)}`);
log(`HasDriverLicence: ${person.hasDriverLicence}, type: ${typeof(person.hasDriverLicence)}`);
