// Objeto arguments
function findMax() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

findMax(1, 2, 3, 6, 90, 1); // result 90


// spread
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// rest
function confereTamanho(...args) {
  console.log(args.length);
}
confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5); // 3

// object destructuring
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  }
};

function getFullName({ fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`;
}
getFullName(user);  // John Doe

// for...in
function forInExample(obj) {
  for (prop in obj) {
    console.log(obj[prop]);
    console.log(prop);
  }
}

const meuObjeto = {
  nome: 'João',
  idade: 20,
  cidade: 'Salvador'
}
forInExample(meuObjeto);
//João
// nome
// 20
// idade
// Salvador
// cidade

// for...of
function logLetters(word) {
  for (letter of word) {
    console.log(letter);
  }
}
const word = 'abacaxi';
logLetters(word);
// a b a c a x i