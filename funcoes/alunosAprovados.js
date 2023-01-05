const alunos = [
  {
    nome: 'José',
    nota: 5,
    turma: '1A',
  },
  {
    nome: 'Maria',
    nota: 9,
    turma: '1B',
  },
  {
    nome: 'Joana',
    nota: 6,
    turma: '1C',
  }
];

function approvedStudents(alunos, media) {
  let aprovados = [];
  for (let aluno of alunos) {
    let { nota, nome } = aluno;
    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}
console.log(approvedStudents(alunos, 6));