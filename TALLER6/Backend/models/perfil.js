const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');  // Asegúrate de que la ruta esté correcta

const Perfil = sequelize.define('Perfil', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Perfil;
