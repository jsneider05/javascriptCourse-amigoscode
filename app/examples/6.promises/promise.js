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
