import { printDataTopo, printTarefa } from "./printTarefa.js";

export const getTarefas = () => {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    let datas = [];
    tarefas.forEach(tarefa => {
        datas.push(tarefa.data);
    });

    let distinctDatas = [...new Set(datas)];
    distinctDatas.sort();

    distinctDatas.forEach(dia => {
        printDataTopo(dia);
        tarefas.forEach(tarefa => {
            if (tarefa.data == dia){
                printTarefa(tarefa);
            }
        })
    })
    console.log(distinctDatas);
};





