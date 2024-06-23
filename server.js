import express from 'express';
import TragosRouter from './router/tragos.js'



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const PORT = 8080;
app.use("/tragos", new TragosRouter().start())
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Ocurrió un error en el servidor: ${error.message}`));