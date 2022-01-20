import http from 'http';
import fs from 'fs/promises';

const monitorRequisicao = (req, res) => { // arrow function
    // Configurando o cabeçalho da resposta para trabalhar
    // com arquivos HTML e charset utf-8
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});

    // Avaliando cada requisição (cada acesso a partir de link)
    switch(req.url){
        case '/': 
            // fs faz o carregamento e leitura do arquivo
            fs.readFile('paginas/index.html')

                // Estando pronto, envia o conteudo obtido como resposta
                .then(conteudo => res.end(conteudo));
        break;

        case '/sobre':
            fs.readFile('paginas/sobre.html')
                .then(conteudo => res.end(conteudo));
        break;

        default:
            res.writeHead(404);
            fs.readFile('paginas/404.html')
                .then(conteudo => res.end(conteudo));
        break;
    }
}; 


// Criamos um servidor http e indicamos a função de requisições
const servidor = http.createServer( monitorRequisicao );

// Iniciamos o servidor indicando uma porta e função (apenas como log)
servidor.listen(8080, () => {
    console.log('Servidor rodando....');
});