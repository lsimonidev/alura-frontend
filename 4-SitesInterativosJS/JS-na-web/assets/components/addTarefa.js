import { Tarefa } from "./Tarefa.js";

export function addTarefa(evento) {
    let tarefa = new Tarefa;
    tarefa.texto = document.querySelector('[data-form-input]').value;
    tarefa.data = moment(document.querySelector('[data-form-date]').value).format('DD/MM/YYYY');

    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
