export class SistemaAutenticacao{
    //Polimorfismo em Cliente e Funcionario
    // ser autenticável significa ter o método autenticar.

    //Ducky type - possível apenas em linguagend fracamente tipadas
    //Se anda como um pato, faz barulho de pato, deve ser um pato.
    //não interessa o tipo do objeto e sim que ele tenha o necessário para utilizarmos.
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