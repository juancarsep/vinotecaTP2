import express, { Router } from 'express';
import controlador from '../controller/vinos.js'

class router{
    router = null
    constructor(){
        this.router = express.Router();
        this.controlador = new controlador();
    }

    start(){
        this.router.get('/', this.controlador.obtenerVinos);
        this.router.get('/:id', this.controlador.obtenerVino);
        this.router.post('/', this.controlador.guardarVino);
        this.router.put('/:id', this.controlador.editarVino);
        this.router.delete('/:id', this.controlador.eliminarVino);
    }
}

export default Router;