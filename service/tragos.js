import Modelo from '../model/tragos.js'
import transporter from '../config/mailers.js'

class Servicio{
    modelo = null;

    modelo = new Modelo();

    obtenerTragos = async _ => {
        const tragos = await this.modelo.obtenerTragos();
        return tragos || {};
    }

    obtenerTrago = async id => {
        const trago = await this.modelo.obtenerTrago(id);
        return trago || {};
    }

    guardarTrago = async trago => {
        await this.modelo.guardarTrago(trago);
        return trago;
    }

    editarTrago = async (id, trago) => {
        const tragoActualizado = await this.modelo.editarTrago(id, trago);
        return tragoActualizado;
    }

    eliminarTrago = async id => {
        const tragoEliminado = await this.obtenerTrago(id);
        await this.modelo.eliminarTrago(id);
        return tragoEliminado;
    }

    enviarCorreo = async mail => {
        await transporter.sendMail({
            from: '"Tragoteca TP2🍷" <tptragoteca@gmail.com>',
            to: mail,            
            html: "<b>Hora de tomar!</b>",
        });
    }

}

export default Servicio;