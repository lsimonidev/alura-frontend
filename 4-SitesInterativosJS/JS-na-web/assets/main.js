import { addTarefa } from "./components/addTarefa.js";
import { getTarefas } from './components/getTarefas.js';

const button = document.querySelector('[data-form-button]');
button.addEventListener('click', addTarefa);

getTarefas();