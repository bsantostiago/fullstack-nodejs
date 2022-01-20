import express from 'express';

// Associando os recursos do módulo express à uma constante
const app = express();

// Configurar a view engine para o EJS
app.set('view engine', 'ejs');


// Configurar as rotas

// Rota raíz (index)
app.get('/', (req, res) => {
    const bandas = ['Rush', 'Pink Floyd', 'Nightwish', 'Slayer'];
    res.render('paginas/index', { bandas });
});

app.get('/sobre', (req, res) => {
    res.render('paginas/sobre');
});

app.get('/contato', (req, res) => {
    res.render('paginas/contato');
});


// Executando o servidor ExpressJS
let porta = 8080;
app.listen(porta, () => {
    console.log('Servidor ExpressJS em execução... ');
});