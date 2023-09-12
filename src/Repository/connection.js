import mysql from 'mysql2';

const conexao = await mysql.createConnection({
    host:       process.env.HOST,
    database:   process.env.BD,
    user:       process.env.USER,
    password:   process.env.PASSWORD
})


console.log('Banco de dados conectado com sucesso!');
export default conexao;