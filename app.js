const express = require('express');
const sequelize = require('./src/config/database');
require('dotenv').config();
require('./src/models');

const app = express(); //

app.use(express.json());


app.use('/usuarios', require('./src/routes/userRoutes'));
app.use('/produtos', require('./src/routes/produtoRoutes'));
app.use('/pedidos', require('./src/routes/pedidoRoutes'));

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
