import * as express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Função vulnerável a XSS
app.get('/greet', (req, res) => {
  const name = req.query.name as string; // Nome recebido da query string
  res.send(`<h1>Hello, ${name}!</h1>`); // Não sanitiza a entrada do usuário
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
