/* Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

Utilize o array de usuários abaixo: */

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  },
  {
    nome: "Fulano",
    receitas: [10,20.5],
    despesas: [5, 10.5,30]
  }
];

for(user of usuarios){
    let resultado=0, saldo=" "
    resultado = calculaSaldo(user.receitas,user.despesas)

    resultado>0 ? saldo='POSITIVO':saldo='NEGATIVO'

    console.log(`${user.nome} possui saldo ${saldo} de ${resultado.toFixed(2)}`);
}

function calculaSaldo(receitas, despesas) {
    let resultado = 0;

    resultado += somaNumeros(receitas);
    resultado -= somaNumeros(despesas);
    return resultado;
}

function somaNumeros(numeros) {
    let resultado = 0;

    for(nums of numeros){
        resultado += nums
    }
    return resultado;
}