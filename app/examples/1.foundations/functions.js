/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Functions");
/* coding examples */

/*
A function is a Javascript procedure, it´s a set of statements that
allow perform a task or calculate a value.
*/

/* Function declaration */
function addNumbers(n1, n2) {
  // start of function boddy
  // Define logic
  var result = n1+n2;
  return result;
  // end of function boddy
}

var result = addNumbers(10, 20);
log(result);

/* Function expression or anonymous */

var multiplyNumbers = function(n1, n2) {
  var result = n1 * n2;
  return result;
}

var resultMultiplication = multiplyNumbers(10, 20);
log(resultMultiplication);

/* Some functions avaliables in Javascript */
var person = {
  name: "Anna",
  age: 20
}

log(Object.keys(person));
log(Object.values(person));

log(person.name.toLowerCase());
log(person.name.toUpperCase());
log(person.name.endsWith("a"));
log(person.name.startsWith("A"));



