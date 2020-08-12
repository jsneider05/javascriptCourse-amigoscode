/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Recursion');
/* coding examples */

const countdown = a => {
  if (a < 0) return;
  log(a);
  return countdown(a - 1);
}

// countdown(10);

/* Calling external API */
const url = 'http://jsonplaceholder.typicode.com/users';
const urlWrong = 'http://jsonplaceholde.typicode.com/user';

const callApiData = async (url, n = 0) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    if (n > 5) {
      throw error;
    }
    return callApiData(url, n + 1);
  }
}

callApiData(urlWrong)
  .then(users => {
    if (users.length > 0) {
      users.forEach(user => {
        const { id, name } = user;
        log(`${id} - ${name}`);
      });  
    } else {
      log('No data');
    }
  })
  .catch(error => log(error));

/* Same example in other form */
const callApi = async (url, n = 0) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    data.forEach(user => {
      const { id, name } = user;
      log(`${id} - ${name}`);
    });
    return data;
  } catch (e) {
    if (n > 5) {
      return '';
    }
    log(e);
    return callApi(url, n + 1);
  }
}

callApi(url);
