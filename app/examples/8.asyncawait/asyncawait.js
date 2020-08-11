/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Async Await");
/* coding examples */

const logName = async name => {
  log(name);
  // 1. We can yield promises using await
  const transformName = new Promise((resolve, reject) => {
    setTimeout(() => resolve(name.toUpperCase()), 1000);
    setTimeout(() => reject('There was an error'), 1500);
  });

  const result = await transformName;
  // 2. Return a promise
  return result;
}

logName('Antonio')
  .then(res => log(`Result from async function = ${res}`))
  .catch(err => log(err));

/* Example 2: From Generators to Async Await */
const getRandomUsers = async n => {
  const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
  const data = await fetchRandomUsers.json();
  return data;
};

getRandomUsers(5)
  .then( randomUsers => {
    randomUsers.results.forEach( user => {
      const {gender, email} = user;
      log(`${gender} - ${email}`);
    });
  })
  .catch(error => log(error));

/* Example 2.1: try catch block */
const getRandomUsersTryCatch = async n => {
  try {
    const fetchRandomUsers = await
      fetch(`httpsrandomuser.me/api/?results=${n}`)
    const data = await fetchRandomUsers.json();
    data.results.forEach(user => {
      const {gender, email} = user;
      log(`${gender} - ${email}`);
    });
    return data;
  } catch(err) {
    log(err);
  }
}

getRandomUsersTryCatch(5);