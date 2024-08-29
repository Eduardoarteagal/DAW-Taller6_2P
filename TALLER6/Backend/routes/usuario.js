const express = require('express');
const Usuario = require('../models/usuario');
const Perfil = require('../models/perfil');
const router = express.Router();

router.post('/', async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.json(usuario);
});

router.get('/', async (req, res) => {
  const usuarios = await Usuario.findAll({ include: Perfil });
  res.json(usuarios);
});

module.exports = router;
