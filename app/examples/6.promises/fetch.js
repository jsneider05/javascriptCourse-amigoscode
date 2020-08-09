/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Promises & Fetch Api');

/* 
  Fetch is simply an API which will be available through every single
  browser. We will pass simply the URL.
*/

const getRandomUsers = n => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  fetchRandomUsers.then(data => {
    data.json().then( randomUsers => {
      log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach( user => {
        const { name : { first : firstName, last : lastName }, gender, email } = user;
        log(`${firstName} - ${lastName} - ${gender} - ${email}`);
      })
    });
  });
}

getRandomUsers(5);

/* Example 2 */

// posts: http://jsonplaceholder.typicode.com/posts

fetch('http://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(users => {
  log(users.length)
  users.forEach( user => {
    const { id, username, address : { city } } = user;
    log(`${id} - ${username} - ${city}`);
  })
});
