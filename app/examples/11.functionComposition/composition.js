/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
import _ from 'lodash';
/* your imports */
logTitle('Function composition');
/* coding examples */

/*
Function composition is the process of combining two or more functions 
to produce a new function.
Put simply, a composition of functions `f` and `g` can be defined as `f(g(x))`, 
which evaluates from the inside out — right to left.
*/

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
  /* x => f(g(x)) == compose(f,g) */
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
/*
La función recibe N funciones y hace  un array, en este caso: recibe esto 
[buildName, capitalize] y eso devuelve una función que recibe el parámetro 
x entonces con el reduceRight empieza de derecha a izquierda y hace algo así
 capitalize(x)
 buildName(el resultado de capitalize)
Y retorna el nombre.
*/
// const getNameCompose = user => compose(buildName, capitalize)(user);
  /* Point free or "programacion tacita" */
const getNameCompose = compose(buildName, capitalize);

const user1 = getNameCompose(users[0])
log(user1);
