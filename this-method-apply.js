const pessoa = {
  nome: 'Miguel',
};

const animal = {
  nome: 'Godi',
};

function getSomething() {
  console.log(this.nome);
}

getSomething.apply(pessoa);


// Example 2 - params inside array
const myObject = {
  num1: 2,
  num2: 4,
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObject, [1, 5]); // 12