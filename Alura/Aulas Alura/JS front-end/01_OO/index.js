class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();  // instanciando o Cliente
const cliente2 = new Cliente();

cliente1.nome = "Hebert";
cliente1.cpf = 08999868621;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 14332281

cliente2.nome = "Alice";
cliente2.cpf = 11111111111;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);