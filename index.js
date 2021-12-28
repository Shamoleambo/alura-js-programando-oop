class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  saldo;
  agencia;
  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
}

const cliente = new Cliente();
cliente.nome = "mano";
cliente.cpf = "111111111";

const contaCorrente = new ContaCorrente();

console.log(cliente);
