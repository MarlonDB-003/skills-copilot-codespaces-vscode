const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rota de exemplo para GET
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Rota de exemplo para POST
app.post('/comentarios', (req, res) => {
  const comentario = req.body.comentario;
  res.send(`Comentário recebido: ${comentario}`);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

