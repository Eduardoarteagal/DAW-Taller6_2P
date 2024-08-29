const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');  // Asegúrate de que la ruta esté correcta
const Perfil = require('./perfil');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_perfil: {
    type: DataTypes.INTEGER,
    references: {
      model: Perfil,
      key: 'id'
    }
  }
});

Usuario.belongsTo(Perfil, { foreignKey: 'id_perfil' });

module.exports = Usuario;
