
//"npm init" no terminal para colocar o projeto como um modulo.
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const ccLaura = new ContaCorrente;
ccLaura.agencia = "1001";
ccLaura.depositar(200);
ccLaura.depositar(-1);
ccLaura.sacar(100);