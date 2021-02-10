import {handleForm} from './components/criaTarefa.js';
import {carregaTarefa} from './components/carregaTarefa.js';

const button = document.querySelector('[data-form-button]');
button.addEventListener('click', handleForm);

carregaTarefa();