/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Let keyword');

for(var i = 0; i<10; i++){
  log(i);
}

log(i);

for(let j = 0; j<10; j++){
  log(j);
}

log(j);
