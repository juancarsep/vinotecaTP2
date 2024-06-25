import servicio from '../service/tragos.js';
import PDFDocument from 'pdfkit';

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
        .then(() => res.status(200).send({response: 'Correo enviado'}))
        .catch(error => res.status(500).send(error));
    }
      
    descargarMenu = async (req, res) => {
      const doc = new PDFDocument();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="simple_report.pdf"');

      doc.pipe(res);

      const tragos = await this.servicio.obtenerTragos();
      
      doc.fontSize(25).text('Carta de tragos', { align: 'center' });
      
      tragos.forEach(cocktail => {
        doc.fontSize(18).text(`Nombre: ${cocktail.nombre}`);
        doc.fontSize(16).text(`Precio: $${cocktail.precio.toFixed(2)}`);
        doc.moveDown();
      });

      doc.end();
    }
    /*
    enviarCorreo = (req, res) => {
        const {email} = req.body;
        servicio.enviarCorreo(email);
    */
}

export default Controlador;