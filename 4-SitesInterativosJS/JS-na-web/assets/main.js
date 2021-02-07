import BotaoDeleta from './components/deletaTarefa.js';
import BotaoConclui from './components/concluiTarefa.js';

const criarTarefa = (evento) => {
    evento.preventDefault();

    const novaTarefa = document.querySelector('[data-form-input]').value;
    const lista = document.querySelector('[data-list]');
    
    const tarefa = `<p class="content"> ${novaTarefa} </p>`;
    const item = document.createElement('li');
    item.innerHTML = tarefa;
    item.classList.add('task');
    item.appendChild(BotaoConclui());
    item.appendChild(BotaoDeleta());
    lista.appendChild(item);
}
    
const button = document.querySelector('[data-form-button]');
button.addEventListener('click', criarTarefa);


