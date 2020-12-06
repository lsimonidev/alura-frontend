import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
       constructor(cliente, agencia){
        super(0, cliente, agencia); // Chamando o construtor da Classe Mãe (super classe)
        ContaCorrente.numeroDeContas += 1;
    }
    
    //sobrescrevendo o comportamento de sacar
    sacar(valor){
        return super._sacar(valor, 1.1);
    }
    
}
