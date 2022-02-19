// Import stylesheets
import './style.css';

import { person } from './person';

// Write TypeScript code!
let wilson = new person('Wilson', 'Iglesias', 'Trindade', 19);
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>` + 'nome:' + ' ' + wilson.getFullName() + `</h1>`;
appDiv.innerHTML += `<p>` + 'idade:' + ' ' + wilson.getBirthdayYear() + `</p>`;
