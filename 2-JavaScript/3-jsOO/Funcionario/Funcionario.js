export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this.senha;
    }

    setSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        if(this._senha == senha){
            return true;
        }
        return false;
    }
}