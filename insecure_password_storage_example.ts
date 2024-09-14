import * as express from 'express';
import * as fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());

// Armazena senhas em texto simples (não seguro)
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Armazena as credenciais em um arquivo de texto
  fs.appendFile('users.txt', `${username}:${password}\n`, (err) => {
    if (err) {
      res.status(500).send('Erro ao salvar credenciais');
      return;
    }
    res.send('Usuário registrado com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
