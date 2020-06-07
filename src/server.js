const express = require('express')
const server = express();

// pegar o banco de dados
const db = require('./database/db')

// configurar pastas publicas
server.use(express.static('public'))

// habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

// utilizando template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// configurar caminhos da aplicação
// para pagina inicial
// req: Requisição
// res: Reposta
server.get('/', (req, res) => {
    return res.render('index.html', { title: 'um titulo' })
})

server.get('/create-point', (req, res) => {

    // req.query: Query String da URL
    // console.log(req.query)

    return res.render('create-point.html')
})

server.post('/savepoint', (req, res) => {

    // req.body: O corpo do formulário
    // console.log(req.body)

    //inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            name,
            cep,
            bairro,
            logradouro,
            address2,
            uf,
            localidade,
            image,
            items
        ) VALUES (?,?,?,?,?,?,?,?,?);
    `

    const values = [
        req.body.name,
        req.body.cep,
        req.body.bairro,
        req.body.logradouro,
        req.body.address2,
        req.body.uf,
        req.body.localidade,
        req.body.image,
        req.body.items
    ]

    function afterIsertData(err) {
        if (err) {
            console.log(err)
            return res.send('Erro no cadastro!')
        }
        console.log('Cadastrado com sucesso')
        console.log(this)

        return res.render('create-point.html', { saved: true })
    }
    db.run(query, values, afterIsertData) // EU INSIRO OS DADOS NA TABELA
})

server.get('/search', (req, res) => {

    const search = req.query.search

    if(search == '') {
        // pesquisa vazia
        return res.render('search-results.html', { total: 0 })
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE localidade LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            console.log(err)
        }
        const total = rows.length
        // mostrar a pagina HTML com os dados do banco de dados
        return res.render('search-results.html', { places: rows, total: total })
    })
})
// iniciar o servidor na porta 3000
server.listen(3000)