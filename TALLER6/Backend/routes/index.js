const express = require('express');
const perfilRouter = require('./perfil');
const usuarioRouter = require('./usuario');
const router = express.Router();

router.use('/perfiles', perfilRouter);
router.use('/usuarios', usuarioRouter);

module.exports = router;
