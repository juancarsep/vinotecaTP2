import servicio from '../service/tragos.js';

class Controlador{
    constructor(){
        this.servicio = new servicio();
    }

    obtenerTragos = async (req, res) => {        
        const tragos = await this.servicio.obtenerTragos();
        res.json(tragos);
    }

    obtenerTrago = async (req, res) => {
        const {id} = req.params;
        const trago = await this.servicio.obtenerTrago(id);
        res.json(trago);
    }

    guardarTrago = async (req, res) => {
        const trago = req.body;
        const tragoGuardado = await this.servicio.guardarTrago(trago);
        res.json(tragoGuardado);

    }

    editarTrago = async (req, res) => {
        const {id} = req.params;
        const trago = req.body;
        const tragoActualizado = await this.servicio.editarTrago(id, trago);
        res.json(tragoActualizado);
    }

    eliminarTrago = async (req, res) => {
        const {id} = req.params;
        const tragoEliminado = await this.servicio.eliminarTrago(id);
        res.json(tragoEliminado);
    }

    enviarCorreo = (req, res) => {
        const {mail} = req.body;
        this.servicio.enviarCorreo(mail)
            .then(() => res.status(200).send('Correo enviado'))
            .catch(error => res.status(500).send(error));
    }
    /*
    enviarCorreo = (req, res) => {
        const {email} = req.body;
        servicio.enviarCorreo(email);
    */
}

export default Controlador;