import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        const taxa = 1.01;
        super(0, cliente, 1001 , taxa); //Chama o construtor da Classe mãe
    }
    
    sacar(valor){
        this._sacar(valor, this._taxa);
    }
}