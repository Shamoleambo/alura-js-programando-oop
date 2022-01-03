import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente = new Cliente("mano", 111111111);
const cliente2 = new Cliente("truta", 222222222);
const contaCorrente = new ContaCorrente(1001, cliente);
const contaCorrente2 = new ContaCorrente(1001, cliente2);

contaCorrente.depositar(100);
contaCorrente.transferir(25, contaCorrente2);

console.log(cliente, cliente2);
