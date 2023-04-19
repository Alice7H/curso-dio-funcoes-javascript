# Dominando Funções em Javascript

É um curso da DIO ministrada por Stephany Nusch

## Objetivo

Mostrar declaração de funções, manipulação de parâmetros, loops, o argumento "this" e outras declarações.

## Funções

Funções são métodos de objeto.

- Com retorno
- Sem retorno
- Anônima
- Autoinvocável IIFE (Immediately Invoked Function Expression)
- Callbacks

## Parâmetros

- A partir do ES2015, é possível que parâmetros de funções sejam inicializados com `valores padrão` se nenhum valor (ou undefined) for fornecido. Não sendo mais necessária a verificação no corpo da função.

- Objeto `arguments` é um array com todos os parâmetros passados quando a função for invocada.

## Manipulação de Arrays

- Spread: usa uma forma de lidar separadamente com elementos de um array.

- Rest: combina os argumentos em um array.

## Manipulação de objetos

- Object destructuring ou desestruturação de objeto, é o uso de chaves `{}` para filtrar dados que nos interessam em um objeto.

## Condicional e Loops

- if/else: uso de condicional atribuído a uma variável para melhor compreensão, uso do booleano no retorno de uma condição numa função para evitar variável.

- switch/case: equivale a uma comparação de tipo e valor (===), sempre precisa de um valor default, ideal para comparar muitos valores.

- for: loop dentro de elementos iteráveis (arrays, strings).

  - for...in: loop entre propriedades enumeráveis de um objeto.

  - for...of: loop entre estruturas iteráveis (arrays, strings).

- while: executa instruções até que a condição se torne falsa.

- do/while: executa instruções até que a condição se torne falsa, mas a primeira execução `sempre ocorre`.

## This

É uma palavra reservada de referência de contexto.
Seu valor pode mudar de acordo com o lugar no código onde foi chamado.

- Dentro de um objeto (método), a referência será o próprio objeto dono do método.

- Declarado sozinho ou no navegador, refere-se a um objeto global (window).

- Dentro de uma função, refere-se a um objeto global.

- Em um evento no HTML, refere-se a um elemento que recebeu o evento. Ex: se fizer um log do console no this do evento onclick de um botão, teremos o elemento botão.

## Manipulando o valor de this

`Método call` é um método predefinido, pode ser usado para invocar (chamar) um método com um objeto proprietário como argumento (parâmetro). Um objeto pode usar um método pertencente a outro objeto.

`Método apply` chama uma função com um dado valor `this` e `arguments` providos como um array.

`Método bind` clona a estrutura da função onde é chamada e aplica o valor do objeto passado com parâmetro.

## Arrow Functions

É uma alternativa compacta a uma expressão de função tradicional, representada por `=>`.

Caso exista apenas uma linha de código, podemos dispensar o return e as chaves.

Caso exista apenas um parâmetro, podemos dispensar os parênteses.

Ex:

```js
// function
const helloWorld = function() {
  return "Hello World";
}

// arrow function
const helloWorld = () => "Hello World";
```

Ex:

```js
const soma = (a, b) => a + b;
const test = a => a;

soma(4,6); // 10
test(4); // 4
```

Arrow function `não` faz hoisting (termo onde as declarações de variáveis são levadas para o topo do escopo antes de começar a executar um código), ou seja, devemos declarar a função antes de chamá-la.

- O `this` sempre será o objeto global, então métodos para modificar seu valor não irão funcionar;
- Não existe o objeto `arguments`;
- Não pode usar o construtor new MeuObjeto();
- Use arrow functions para funções que não sejam métodos.
