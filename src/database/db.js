// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {
    //     // Com comandos SQL eu vou:
    //     // 1. Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         cep TEXT,
    //         bairro TEXT,
    //         logradouro TEXT,
    //         address2 TEXT,
    //         uf TEXT,
    //         localidade TEXT,
    //         image TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2. Inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         cep,
    //         bairro,
    //         logradouro,
    //         address2,
    //         uf,
    //         localidade,
    //         image,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?,?,?);
    // `

    // const values = [
    //     'Papersider',
    //     '04812250',
    //     'bairro',
    //     'logradouro rua',
    //     'Nº260',
    //     'Uf',
    //     'Localidade cidade',
    //     'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80',
    //     'Reaíduos Eletrônicos, Lâmpadas'
    // ]

    // function afterIsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log('Cadastrado com sucesso')
    //     console.log(this)
    // }
    // db.run(query, values, afterIsertData) // EU INSIRO OS DADOS NA TABELA

    // 3. Consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log('Aqui estão os seus registros.')
    //     console.log(rows)
    // })

    // // 4. Deletar um dado da tabala
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log('Registro deletado com sucesso!')
    // })
// })