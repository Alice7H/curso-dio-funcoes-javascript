const returnNames = function () {
  return this.name;
};

let alice = returnNames.bind({ name: 'Alice' });

alice(); // Alice