function soma (valor1, valor2) {
    return valor1 + valor2;
}

function multiplica(valor1, valor2) {
    return valor1 * valor2;
}

// export default nomeDoRecurso; // exportação de somente UM
// export { soma, multiplica };

const operacoes = { soma, multiplica };
export default operacoes;