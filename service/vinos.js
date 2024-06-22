import Modelo from '../model/vinos.js'
import transporter from '../config/mailers.js'

class Servicio{
    modelo = null;

    modelo = new Modelo();

    obtenerVinos = async _ => {
        const vinos = await this.modelo.obtenerVinos();
        return vinos || {};
    }

    obtenerVino = async id => {
        const vino = await this.modelo.obtenerVino(id);
        return vino || {};
    }

    guardarVino = async vino => {
        await this.modelo.guardarVino(vino);
        return vino;
    }

    editarVino = async (id, vino) => {
        const vinoActualizado = await this.modelo.editarVino(id, vino);
        return vinoActualizado;
    }

    eliminarVino = async id => {
        const vinoEliminado = await this.obtenerVino(id);
        await this.modelo.eliminarVino(id);
        return vinoEliminado;
    }

    enviarCorreo = async mail => {
        await transporter.sendMail({
            from: '"Hora de tomar 🍷" <tpvinoteca@gmail.com>',
            to: mail,
            subject: "Hello ✔",
            html: "<b>Hello world?</b>",
        });
    }

}

export default Servicio;