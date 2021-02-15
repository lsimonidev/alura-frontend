export const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('check-button');
    botaoDeleta.innerText = 'Deletar';

    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    botaoDeleta.parentElement.remove();
    return botaoDeleta;
}
    