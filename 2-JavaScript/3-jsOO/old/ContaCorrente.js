export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    //#saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    _saldo; // esse atributo não é privado de verdade, mas por acordo da comunidade.
  
    get saldo(){
        return this._saldo;
    }

    set agencia(agencia){
        this.agencia = agencia;
    }

    get agencia(){
        return this.agencia;
    }

    get numeroDeContas(){
        return ContaCorrente.numeroDeContas;
    }

    constructor(agencia, saldo){
        this.agencia = agencia;
        this._saldo = saldo;
        ContaCorrente.numeroDeContas ++;
    }
    
    
    depositar(valor){
        if (valor <= 0) return;
        this._saldo += valor;
        return valor;            
    }

    sacar(valor){
        if(this._saldo < valor) return;
        this._saldo -= valor;
        return valor;  
    }

    
    transferir(valor, conta){ 
        conta.depositar(this.sacar(valor));
    }
}