import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente = new Cliente();
cliente.nome = "mano";
cliente.cpf = "111111111";

const contaCorrente = new ContaCorrente();
contaCorrente.agencia = 1001;

console.log(cliente);
console.log(contaCorrente);
