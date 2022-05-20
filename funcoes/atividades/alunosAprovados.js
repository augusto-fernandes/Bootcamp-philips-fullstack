/*
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

const alunos = [
  {
    nome: "João",
    nota: 5,
    turma: "1B",
  },

  {
    nome: "Sofia",
    nota: 9,
    turma: "11B",
  },

  {
    nome: "Paulo",
    nota: 6,
    turma: "2C",
  },
  {
    nome: "Miguel",
    nota: 4,
    turma: "2C",
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];
  let reprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
    if (nota < media) {
      reprovados.push(nome);
    }
  }

  console.log(
    `os alunos ${aprovados} estao na media e os alunos ${reprovados} foram reprovados.`
  );
}

console.log(alunosAprovados(alunos, 5));
