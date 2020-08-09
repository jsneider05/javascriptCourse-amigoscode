/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Promises');

/* 
  The promise is simple an object that is used for asynchronous
  computations.
  Represents a value which may be avaliable now, or in the future,
  or never.
  Promises States:
  - Pending: initial state, not fulfilled or rejected.
  - Fulfilled: meaning that the operation completed successfully.
  - Rejected: meaning that the operation failed.
  If the promise will be fulfilled we can use the .then method and
  and pass a callback and perform whatever computation we want.
  If the promise will rejected then we can use the .catch method
  and we can perform any computation that we didn't in the callback.
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data back from the server');
  }, 3000);

  setTimeout(() => {
    reject('no data back from the server, there was an error');
  }, 5000);
});

promise.then(response => {
  log(response);
}).catch(error => {
  log(error);
});

/* Example 2 */
const p1 = Promise.resolve(1);

p1
  .then( response => {
    log(response);
    return response + 5;
  })
  .then( response => {
    log(response);
    return Promise.resolve( response + 5 );
  })
  .then( response => Promise.reject('Error!'))
  .then( response => log('This wont be called'))
  .catch( error => log(error));

/* Example 3 */
const delayed = data => new Promise((resolve, reject) => setTimeout(() => resolve(data), 900));
const promiseReject = () => new Promise((resolve, reject) => setTimeout(() => reject('Error!'), 500));

delayed(7)
  .then(data => {
    log(data);
    return delayed(data + 7);
  })
  .then(data => log(data))
  .then(data => promiseReject())
  .catch( error => log(error));
