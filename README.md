# Projeto de Testes de Vulnerabilidade

Este repositório contém um exemplo de um projeto de teste que explora uma vulnerabilidade comum em sistemas web: **Cross-Site Scripting (XSS)**.

## Descrição

O projeto é uma aplicação web simples usando o framework [Express](https://expressjs.com/) que escuta na porta 3000. A aplicação demonstra uma falha de segurança ao não sanitizar a entrada do usuário, resultando em uma vulnerabilidade de XSS.

## Explicação do Código

- **Servidor Express:** O servidor está configurado para escutar na porta 3000.
- **Rota `/greet`:** Recebe um parâmetro de query `name` e o insere diretamente na resposta HTML sem sanitização.

### Vulnerabilidade

A vulnerabilidade ocorre porque o valor do parâmetro `name` é inserido diretamente no HTML retornado pela rota `/greet`. Sem sanitização, um usuário malicioso pode injetar código JavaScript na query string, que será executado no navegador dos visitantes.

## Exemplo de Exploração

Para demonstrar a vulnerabilidade, acesse a seguinte URL em um navegador:

http://localhost:3000/greet?name=<script>alert('XSS')</script>

bash
Copiar código

Se o código estiver vulnerável, o navegador exibirá um alerta com a mensagem "XSS", mostrando a falha de segurança.

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd <NOME_DO_REPOSITÓRIO>
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
npm start
Acesse a rota vulnerável: Abra o navegador e vá para http://localhost:3000/greet?name=<script>alert('XSS')</script> para ver a vulnerabilidade em ação.

Conclusão
Este projeto demonstra uma vulnerabilidade de Cross-Site Scripting (XSS). A observação desta vulnerabilidade destaca a importância de validar e sanitizar a entrada do usuário para evitar tais falhas de segurança em aplicações web.

Para mais informações sobre como mitigar ataques XSS e boas práticas de segurança, consulte OWASP XSS Prevention Cheat Sheet.
