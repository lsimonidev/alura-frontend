
//"npm init" no terminal para colocar o projeto como um modulo.
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const clienteLaura = new Cliente("Laura Simoni", 11122233309);
clienteLaura.contaCorrente = new ContaCorrente(1001, 1000);

const clienteHugo = new Cliente("Hugo Fortes", 99911199921);
clienteHugo.contaCorrente = new ContaCorrente(1001, 0);

clienteLaura.contaCorrente.transferir(200, clienteHugo.contaCorrente);

console.log(clienteLaura);
console.log(clienteHugo);

console.log(ContaCorrente.numeroDeContas);