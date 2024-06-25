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
      const tragos = await this.modelo.obtenerTragos();
      let html = "<b>Carta de tragos:</b><br><ul>";
      tragos.forEach(trago => {
        html += `<li>${trago.nombre} - ${trago.precio.toFixed(2)}</li>`;
      });
      html += "</ul>";
      await transporter.sendMail({
        from: '"Hora de tomar 🍷" <tptragoteca@gmail.com>',
        to: mail,
        subject: "Carta de tragos",
        html: html,
      });
    }


}

export default Servicio;