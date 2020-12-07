import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        const taxa = 1.02;
        super(saldoInicial, cliente, agencia , taxa); //Chama o construtor da Classe mãe
        
    }

    sacar(valor){
        return super._sacar(valor, this._taxa);
    }
}