// import * as express from 'express';
// import * as mysql from 'mysql';

// const app = express();
// const port = 3000;

// // Credenciais hardcoded (exemplo inseguro)
// const dbHost: string = "localhost";
// const dbUser: string = "root";
// const dbPassword: string = "password123";
// const dbName: string = "mydatabase";

// // Configuração da conexão com o banco de dados
// const connection = mysql.createConnection({
//   host: dbHost,
//   user: dbUser,
//   password: dbPassword,
//   database: dbName,
// });

// // Conectar ao banco de dados
// connection.connect((err) => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados: ' + err.stack);
//     return;
//   }
//   console.log('Conectado ao banco de dados como ID ' + connection.threadId);
// });

// app.use(express.json());

// // Endpoint vulnerável à injeção SQL
// app.get('/user', (req, res) => {
//   const userId = req.query.id as string; // ID recebido da query string

//   // Consulta SQL vulnerável a injeção
//   const query = `SELECT * FROM users WHERE id = '${userId}'`;

//   connection.query(query, (error, results) => {
//     if (error) {
//       res.status(500).send('Erro ao consultar o banco de dados');
//       return;
//     }
//     res.json(results);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// main();
