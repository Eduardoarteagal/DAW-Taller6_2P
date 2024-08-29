const { Perfil } = require('../models');

async function seed() {
  try{
      await connection.execute('INSERT INTO perfiles (descripcion) VALUES (?)', ['Admin']);
      await connection.execute('INSERT INTO perfiles (descripcion) VALUES (?)', ['Supervisor']);
      await connection.execute('INSERT INTO perfiles (descripcion) VALUES (?)', ['Operador']);
      await connection.execute('INSERT INTO perfiles (descripcion) VALUES (?)', ['Cliente']);
      console.log('Perfiles creados con éxito');
    } catch (error) {
      console.error(error);
    } finally {
      connection.end();
    }
  }


seed();
