import {Cliente} from "./Cliente.js"
import {ContaSalario} from "./Conta/ContaSalario.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(500,1001, cliente1);
contaPoupancaRicardo.sacar(100);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(300);
contaSalario.sacar(20);

console.log(contaCorrenteRicardo);
console.log(contaSalario);