import servicio from '../service/vinos.js';

class Controlador{
    constructor(){
        this.servicio = new servicio();
    }

    obtenerVinos = async (req, res) => {        
        const vinos = await this.servicio.obtenerVinos();
        res.json(vinos);
    }

    obtenerVino = async (req, res) => {
        const {id} = req.params;
        const vino = await this.servicio.obtenerVino(id);
        res.json(vino);
    }

    guardarVino = async (req, res) => {
        const vino = req.body;
        const vinoGuardado = await this.servicio.guardarVino(vino);
        res.json(vinoGuardado);

    }

    editarVino = async (req, res) => {
        const {id} = req.params;
        const vino = req.body;
        const vinoActualizado = await this.servicio.editarVino(id, vino);
        res.json(vinoActualizado);
    }

    eliminarVino = async (req, res) => {
        const {id} = req.params;
        const vinoEliminado = await this.servicio.eliminarVino(id);
        res.json(vinoEliminado);
    }
}

export default Controlador;