import chalk from 'chalk';
console.log("Gerenciando Pacotes com NPM");

const nome = 'Tiago';
let idade = 8;
if( idade >= 18){
    console.log(`${nome} ${chalk.blue('é maior de idade')}`);
} else {
    console.log(`${nome} ${chalk.red('é menor de idade')}`);
}