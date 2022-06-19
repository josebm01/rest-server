const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //* Middlewares
        this.middlewares();

        //* Rutas de aplicación
        this.routes();  
    }

    middlewares(){

        //* Cors: para restringir el acceso a la API y evitar problemas con los navegadores
        this.app.use( cors() );

        //* Lectura y parseo del body
        this.app.use( express.json() );

        //* Directorio publico
        this.app.use( express.static('public') );
    }


    routes(){

       this.app.use( this.usuariosPath, require('../routes/usuarios') );
    
    }


    listen(){

        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        });
    }

}


module.exports = Server;