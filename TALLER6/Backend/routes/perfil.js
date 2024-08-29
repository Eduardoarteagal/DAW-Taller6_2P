const express = require('express');
const Perfil = require('../models/perfil');
const router = express.Router();

router.get('/', async (req, res) => {
  const perfiles = await Perfil.findAll();
  res.json(perfiles);
});

module.exports = router;
