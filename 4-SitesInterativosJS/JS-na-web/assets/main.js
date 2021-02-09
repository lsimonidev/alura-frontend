import BotaoDeleta from './components/deletaTarefa.js';
import BotaoConclui from './components/concluiTarefa.js';
    
const handleForm = (evento) => {
    evento.preventDefault();

    let texto = document.querySelector('[data-form-input]').value;
    let data = moment(document.querySelector('[data-form-date]').value).format('DD/MM/YYYY');

    let tarefa = {
        data,
        texto
    };

    addTarefa(tarefa);
}

const addTarefa = (tarefa) => {
    //Cria item
    const item = document.createElement('li');
    item.innerHTML = `<p> ${tarefa.data} - ${tarefa.texto}</p>`;
    item.classList.add('task');
    item.appendChild(BotaoConclui());
    item.appendChild(BotaoDeleta());

    //Adiciona item à lista de tarefas
    const lista = document.querySelector('[data-list]');
    lista.appendChild(item);
}

const button = document.querySelector('[data-form-button]');
button.addEventListener('click', handleForm);
