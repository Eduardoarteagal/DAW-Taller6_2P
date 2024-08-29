const sequelize = require('../config/config');
const Perfil = require('./perfil');
const Usuario = require('./usuario');

const syncDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synchronized');
};

module.exports = { Perfil, Usuario, syncDatabase };
