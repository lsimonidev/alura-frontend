import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(500,1001, cliente1);
contaPoupancaRicardo.sacar(100);

const conta = new Conta(200, cliente1, 1002);

console.log(contaCorrenteRicardo);
console.log(conta);