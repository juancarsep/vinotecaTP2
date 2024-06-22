import express from 'express';
import VinosRouter from './router/vinos.js'



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const PORT = 8080;
app.use("/vinos", new VinosRouter().start())
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Ocurrió un error en el servidor: ${error.message}`));