export class ContaCorrente{
    agencia;

    //#saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; // esse atributo não é privado de verdade, mas por acordo da comunidade.
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

    getSaldo(){
        return this._saldo
    }

    transferir(valor, conta){ 
        conta.depositar(this.sacar(valor));
    }
}