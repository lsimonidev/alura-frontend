import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente{
    nome; 
    _cpf; 
    _contaCorrente;
    
    set contaCorrente(novoValor){
        if(novoValor instanceof ContaCorrente) this._contaCorrente = novoValor; 
    }

    get contaCorrente(){
        return this._contaCorrente;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }
}