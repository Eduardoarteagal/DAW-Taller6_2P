const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./config/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.get('/perfiles', async (req, res) => {
  try {
    const [perfiles] = await connection.execute('SELECT * FROM perfiles');
    res.json(perfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al consultar perfiles' });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const [usuarios] = await connection.execute('SELECT u.*, p.descripcion AS perfil FROM usuarios u JOIN perfiles p ON u.id_perfil = p.id');
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al consultar usuarios' });
  }
});

app.post('/usuarios', async (req, res) => {
  try {
    const { usuario, nombre, apellido, id_perfil } = req.body;
    await connection.execute('INSERT INTO usuarios (usuario, nombre, apellido, id_perfil) VALUES (?, ?, ?, ?)', [usuario, nombre, apellido, id_perfil]);
    res.json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
});


sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  });
