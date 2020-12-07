export class SistemaAutenticacao{
    //Polimorfismo em Cliente e Funcionario
    // ser autenticável significa ter o método autenticar.
    static login(autenticavel, senha){ 
        return autenticavel.autenticar(senha);
    }
}