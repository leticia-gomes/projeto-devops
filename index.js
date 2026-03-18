const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Aplicação rodando com DevOps!');
});

app.get('/soma', (req, res) => {
  const { a, b } = req.query;
  res.send(`Resultado: ${Number(a) + Number(b)}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
