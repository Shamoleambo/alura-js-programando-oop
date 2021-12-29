import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente = new Cliente();
cliente.nome = "mano";
cliente.cpf = "111111111";
const cliente2 = new Cliente();
cliente2.nome = "truta";
cliente2.cpf = "222222222";

const contaCorrente = new ContaCorrente();
contaCorrente.agencia = 1001;
contaCorrente.cliente = cliente;
const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 1001;
contaCorrente2.cliente = cliente2;

contaCorrente.depositar(100);
contaCorrente.transferir(50, contaCorrente2);

console.log(contaCorrente, contaCorrente2);
