function ola(texto){
    return `Olá ${texto}`;
}

// export default ola; // ESM (EcmaScript Module)
module.exports = ola; // CJS (CommonJS)