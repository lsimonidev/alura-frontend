class Cliente{
    nome; 
    cpf; 
}

class ContaCorrente{
    agencia;
    //#saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    depositar(valor){
        if (valor <= 0) return;
        this._saldo += valor;            
    }

    sacar(valor){
        if(this._saldo < valor) return;
        this._saldo -= valor;
    }

    getSaldo(){
        return this._saldo
    }
}

const ccLaura = new ContaCorrente;
ccLaura.agencia = "1001";
ccLaura.depositar(200);
ccLaura.depositar(-1);
ccLaura.sacar(100);



