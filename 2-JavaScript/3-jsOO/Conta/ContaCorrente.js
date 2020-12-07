import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
       constructor(cliente, agencia){
        const taxa = 1.1;
        super(0, cliente, agencia, taxa); // Chamando o construtor da Classe Mãe (super classe)
        ContaCorrente.numeroDeContas += 1;
    }
    
    //sobrescrevendo o comportamento de sacar
    sacar(valor){
        return super._sacar(valor, this._taxa);
    }
    
}
