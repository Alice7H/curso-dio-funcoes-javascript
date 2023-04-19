const cat = {
  nome: 'Manuel',
  idade: 3,
}
const dog = {
  nome: 'Manuela',
  idade: 5,
}

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(cat, 10));
console.log(calculaIdade.apply(dog, [10]));