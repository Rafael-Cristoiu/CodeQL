// vulnerable-example.js

const { Client } = require('pg'); // Usando pg (PostgreSQL) para um exemplo

// Cria uma conexão com o banco de dados
const client = new Client({
    user: 'user',
    host: 'localhost',
    database: 'test',
    password: 'password',
    port: 5432,
});
client.connect();

// Função vulnerável à injeção de SQL
function getUserByUsername(username) {
    // A consulta SQL é vulnerável à injeção SQL
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    client.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
        } else {
            console.log('User data:', results.rows);
        }
    });
}