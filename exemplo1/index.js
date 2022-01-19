console.log('Hello World!');

const aluno = "Tiago";
const escola = "Senac Penha";

let nota1 = 7.8;
let nota2 = 6.4;

let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(nota1, nota2, media);

console.log("------------------");

let dados = {
    nome : "Geddy Lee",
    idade : 60
};

console.log( dados.nome );
console.table( dados ); // table é bacana para objetos e arrays

let situacao;
if(media >= 7) {
    situacao = 'aprovado';
} else {
    situacao = 'reprovado';
}

console.log(`O aluno ${aluno} está ${situacao}`);