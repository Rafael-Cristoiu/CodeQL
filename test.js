// vulnerable-example.js

const mysql = require('mysql');

// Cria uma conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

// Função vulnerável à injeção de SQL
function getUserByUsername(username) {
    // A consulta SQL é vulnerável à injeção SQL
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            console.log('User data:', results);
        }
    });
}

// Simula a chamada da função com um username fornecido pelo usuário
getUserByUsername("admin' OR '1'='1"); // Exemplo de injeção SQL
