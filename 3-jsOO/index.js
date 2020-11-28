
//"npm init" no terminal para colocar o projeto como um modulo.
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const clienteLaura = new Cliente;

clienteLaura.nome = "Laura Simoni";
clienteLaura.cpf = "11122233309";
clienteLaura.contaCorrente = new ContaCorrente;
clienteLaura.contaCorrente.agencia = "1001";
clienteLaura.contaCorrente.depositar(1000);

const clienteHugo = new Cliente;
clienteHugo.nome = "Hugo Fortes";
clienteHugo.cpf = "88822233309";
clienteHugo.contaCorrente = new ContaCorrente; 
clienteHugo.contaCorrente.agencia = "1002"
clienteLaura.contaCorrente.transferir(200, clienteHugo.contaCorrente);

console.log(clienteLaura);
console.log(clienteHugo);

