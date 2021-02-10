import {addTarefa} from './criaTarefa.js';

export const carregaTarefa = () => {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    tarefas.forEach(tarefa => {
        addTarefa(tarefa);
    });

};