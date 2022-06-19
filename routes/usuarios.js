const { Router } = require('express');
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/usuarios');

const router = Router();


router.get( '/', getUsuarios );

router.put( '/:id', putUsuarios );

router.post( '/', postUsuarios );

router.delete('/', deleteUsuarios);

module.exports = router;