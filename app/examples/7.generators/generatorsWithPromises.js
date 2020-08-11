/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */

import { coroutine as co } from 'bluebird';

logTitle('Generators & Promises');

  /* Example 1: */
const getRandomUsers = co(function* (n) {
  const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandomUsers(5)
  .then( randomUsers => {
    randomUsers.results.forEach( user => {
      const {gender, email} = user;
      log(`${gender} - ${email}`);
    });
  })
  .catch(error => log);

  /* Example 2: */
const getPosts = co(function* () {
  const fetchPosts = yield fetch('http://jsonplaceholder.typicode.com/posts');
  const posts = yield fetchPosts.json();
  return posts;
});

getPosts()
  .then(posts => {
    posts.forEach( post => {
      const { id, title } = post;
      log(`PostId ${id} - Tittle: ${title}`);
    })
  })
  .catch(error => log);
