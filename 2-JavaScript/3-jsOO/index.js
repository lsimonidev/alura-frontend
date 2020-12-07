import { Cliente } from "./Cliente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js";


const diretor = new Diretor("Rodrigo", 10000, 12345679900);
diretor.setSenha("12345");
const gerente = new Gerente("Ivo", 50000, 98765432100);
gerente.setSenha("123");

let estaLogado = SistemaAutenticacao.login(diretor, "12345");
console.log(estaLogado);
estaLogado = SistemaAutenticacao.login(gerente, "123");
console.log(estaLogado);

const cliente = new Cliente("Laura", 99965186120, "456");
estaLogado = SistemaAutenticacao.login(cliente, "456");
console.log("a Cliente está logada?",estaLogado);