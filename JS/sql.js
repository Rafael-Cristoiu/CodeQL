// vulnerable.js

const mysql = require('mysql');

// Cria uma conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

// Função vulnerável à injeção de SQL
function getUserById(userId) {
    // Esta consulta é vulnerável à injeção de SQL
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            console.log('User data:', results);
        }
    });
}

// Simula a chamada da função com um ID fornecido pelo usuário
getUserById('1 OR 1=1'); // Exemplo de injeção de SQL
