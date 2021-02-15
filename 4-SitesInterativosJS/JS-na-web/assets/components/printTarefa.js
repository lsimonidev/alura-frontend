import { BotaoConclui } from "./concluiTarefa.js";
import { BotaoDeleta } from "./deletaTarefa.js";

export const printTarefa = (tarefa) =>{
    //Cria item
    const item = document.createElement('li');
    item.innerHTML = `<p class="content"> ${tarefa.texto}</p>`;
    item.classList.add('task');
    item.appendChild(BotaoConclui());
    item.appendChild(BotaoDeleta());

    //Adiciona item à lista de tarefas
    const lista = document.querySelector('[data-list]');
    lista.appendChild(item);
}

export const printDataTopo = (data) => {
    //Cria item
    const item = document.createElement('li');
    item.innerHTML = `<p class="content-data"> ${data} </p>`;
     
    //Adiciona item à lista de tarefas
    const lista = document.querySelector('[data-list]');
    lista.appendChild(item);
}