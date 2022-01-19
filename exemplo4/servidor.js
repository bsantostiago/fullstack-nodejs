import http from 'http';
import fs from 'fs/promises';

//const monitorRequisicao = function() { }
const monitorRequisicao = (req, res) => { // arrow function
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});

    switch(req.url){
        case '/': 
            fs.readFile('paginas/index.html')
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


const servidor = http.createServer( monitorRequisicao );

servidor.listen(8080, () => {
    console.log('Servidor rodando....');
});