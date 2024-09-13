import sqlLibrary from 'sqlLibrary';

class DatabaseService {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  public executeQuery(userInput: string) {
    // Vulnerabilidade: Injeção de SQL
    const query = `SELECT * FROM users WHERE username = '${userInput}'`;

    // Executa a consulta SQL sem sanitização
    return sqlLibrary.query(this.connectionString, query);
  }
}

// Exemplo de uso
const dbService = new DatabaseService('your-database-connection-string');
const userInput = "admin' --"; // Input malicioso para injeção de SQL
dbService.executeQuery(userInput);
