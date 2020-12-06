//Classe abstrata

export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta){
            throw new Error("Você não pode instanciar um objeto do tipo Conta diretamente pois esta é uma classe abstrata.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        return this._sacar(valor,1);
    }

    _sacar(valor,taxa){
        let valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}