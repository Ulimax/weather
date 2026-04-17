const app = require('./app');
const { port } = require('./config/env');

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});