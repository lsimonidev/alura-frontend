export class SistemaAutenticacao{
    //Polimorfismo em Cliente e Funcionario
    // ser autenticável significa ter o método autenticar.
    static login(autenticavel, senha){ 
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    //static: quando eu nao preciso ter uma instância para utilizar
    //variáveis e métodos da classe
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&  //Verifica se a chave existe dentro do objeto
        autenticavel.autenticar instanceof Function; // e se esta chave é uma função
    }
}