const { request, response } = require('express');

const getUsuarios = ( req = request, res = response ) => {
    
    //* Parámetros query que no son obligatorios 
    const { q, nombre='sin nombre', page, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q, nombre, page, limit
    });
}


const putUsuarios = ( req, res = response ) => {

    //* Parámetros de segmento
    const { id } = req.params;

    res.status(400).json({
        id,
        msg: 'put API'
    });
}


const postUsuarios = ( req, res = response ) => {
    const { nombre, edad } = req.body;

    res.status(200).json({
        msg: 'post API',
        nombre, edad
    });
}


const deleteUsuarios = ( req, res = response ) => {
    res.json({
        msg: 'delete API'
    });
}


module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios
};