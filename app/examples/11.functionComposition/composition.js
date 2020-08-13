/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
import _ from 'lodash';
/* your imports */
logTitle('Function composition');
/* coding examples */

const users = [
  { id: 1, name: 'Joan', lastname: 'Garcia' },
  { id: 2, name: 'Angie', lastname: 'Sanguino' }
]
/* 
const getName = (user) => {
  const name = user.name;
  const lastname = user.lastname;
  const capitalize = {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    lastname: lastname.charAt(0).toUpperCase() + lastname.slice(1)
  }
  return `${capitalize.name} ${capitalize.lastname}`
}
 */
const upperFirst = word => word.charAt(0).toUpperCase() + word.slice(1);

const capitalize = user => ({
  name: upperFirst(user.name),
  lastname: upperFirst(user.lastname)
});

const buildName = user => `${user.name} ${user.lastname}`;

const getName = user => buildName(capitalize(user));

const user = getName(users[0])
log(user);

/* compose function */
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
// const getNameCompose = user => compose(buildName, capitalize)(user);
  /* Point free or "programacion tacita" */
const getNameCompose = compose(buildName, capitalize);

const user1 = getNameCompose(users[0])
log(user1);
