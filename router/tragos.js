import express from 'express';
import controlador from '../controller/tragos.js'

class TragosRouter{
    router = null
    constructor(){
        this.router = express.Router();
        this.controlador = new controlador();
    }

    start(){
        this.router.get('/', this.controlador.obtenerTragos);
        this.router.get('/:id', this.controlador.obtenerTrago);
        this.router.put('/carta', this.controlador.descargarMenu);
        this.router.post('/', this.controlador.guardarTrago);
        this.router.put('/:id', this.controlador.editarTrago);
        this.router.delete('/:id', this.controlador.eliminarTrago);
        this.router.post('/email', this.controlador.enviarCorreo);
        return this.router;
    }
}

export default TragosRouter;