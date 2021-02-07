const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (evento)=>{
    const botaoConclui = evento.target;
    botaoConclui.parentElement.classList.toggle('done');
}

export default BotaoConclui;