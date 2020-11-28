import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente{
    nome; 
    cpf; 
    _contaCorrente;
    
    set contaCorrente(novoValor){
        if(novoValor instanceof ContaCorrente) this._contaCorrente = novoValor; 
    }

    get contaCorrente(){
        return this._contaCorrente;
    }
}