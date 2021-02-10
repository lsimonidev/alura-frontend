import {handleForm} from './components/criaTarefa.js';

const button = document.querySelector('[data-form-button]');
button.addEventListener('click', handleForm);
