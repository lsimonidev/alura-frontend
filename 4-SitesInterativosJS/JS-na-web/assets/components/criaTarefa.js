import BotaoDeleta from './deletaTarefa.js';
import BotaoConclui from './concluiTarefa.js';
    
export const handleForm = (evento) => {
    evento.preventDefault();
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    let texto = document.querySelector('[data-form-input]').value;
    let data = moment(document.querySelector('[data-form-date]').value).format('DD/MM/YYYY');

    let tarefa = {
        data,
        texto
    };

    tarefas.push(tarefa);
    localStorage.setItem('tarefas',JSON.stringify(tarefas));

    addTarefa(tarefa);
}

const addTarefa = (tarefa) => {
    //Cria item
    const item = document.createElement('li');
    item.innerHTML = `<p class="content"> ${tarefa.data} - ${tarefa.texto}</p>`;
    item.classList.add('task');
    item.appendChild(BotaoConclui());
    item.appendChild(BotaoDeleta());

    //Adiciona item à lista de tarefas
    const lista = document.querySelector('[data-list]');
    lista.appendChild(item);
}

