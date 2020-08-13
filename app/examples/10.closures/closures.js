/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Closures');
/* coding examples */

/*
A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope 
from an inner function. In JavaScript, closures are created every time 
a function is created, at function creation time.

The inner function will have access to the variables in the outer 
function scope, even after the outer function has returned.
*/

/* Son la combinacion de una funcion y el alcance lexico que tiene esta */
/* Un closure se crea al momento de ejecutar una funcion
    las variables a las que esta puede acceder en su contexto
    o un contexto superior.
    Ej: Una funcion que va a imprimir una constante que se encuentra
    en un contexto superior ahí se define un closure y este se creo
    al momento de crear la funcion */

const x = 'Fluffy';

const f = () => log(x);

// f();
/* Funcion que recibe el dominio y la ruta */
const crudder = domain => resource => {
  const url = `${domain}/${resource}`;
  return ({
    create: (x) => fetch(url, {
      method: 'POST',
      body: JSON.stringify(x),
    }).then(x => x.json()),
    get: () => fetch(url).then(x => x.json())
  });
}

const base = crudder('https://jsonplaceholder.typicode.com');
const todos = base('todos');
const users = base('users');

todos.get().then(x => log(JSON.stringify(x[0], null, 4)));
users.get().then(x => log(JSON.stringify(x[0], null, 4)));

/*
 Closures are the primary mechanism used to enable data privacy. 
 When you use closures for data privacy, the enclosed variables 
 are only in scope within the containing (outer) function. 
 You can’t get at the data from an outside scope except through 
 the object’s privileged methods. In JavaScript, any exposed 
 method defined within the closure scope is privileged.
 */

const getSecret = secret => {
  return {
    get: () => secret
  };
};

const obj = getSecret(1);
const actual = obj.get();
log(actual === 1); // true

/*
 In the example above, the `.get()` method is defined inside the scope 
 of `getSecret()`, which gives it access to any variables from 
 `getSecret()`, and makes it a privileged method. In this case, 
 the parameter, `secret`.
 */

/*
 Objects are not the only way to produce data privacy. 
 Closures can also be used to create stateful functions whose return 
 values may be influenced by their internal state.
 */

const secret = msg => () => msg;

const theSecret = 'Closures are easy';
const mySecret = secret(theSecret);
const actual1 = mySecret();
log(actual1 === theSecret); // true

/* 
In functional programming, closures are frequently used 
for partial application & currying.
*/
const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};
/* it simply returns a function which retains access to the `fixedArgs` 
arguments that were passed into the `partialApply()` function. */

const add = (a, b) => a + b;

const add10 = partialApply(add, 10);
const actual2 = add10(5);
log(actual2 === 15);



