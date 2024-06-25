class Modelo {

    tragos = [];

    constructor() {
        this.tragos = [
            { id: "1", nombre: "Old Fashioned", precio: 2500.50 },
            { id: "2", nombre: "Negroni", precio: 3100.25 },
            { id: "3", nombre: "Manhattan", precio: 3050.00 },
            { id: "4", nombre: "Daiquiri", precio: 2150.25 },
            { id: "5", nombre: "Margarita", precio: 1700.45 },
            { id: "6", nombre: "Mojito", precio: 2700.50 },
        ]
    }

    obtenerTragos = () => this.tragos;

    obtenerTrago = id => {
        const trago = this.tragos.find(trago => trago.id === id);
        return trago || {};
    }

    guardarTrago = trago => {
        const id = String(parseInt(this.tragos[this.tragos.length - 1]?.id || 0) + 1);
        const tragoConId = { id, ...trago };
        this.tragos.push(tragoConId);
        return tragoConId;
    }

    editarTrago = (id, trago) => {
        const index = this.tragos.findIndex(trago => trago.id === id);
        if (index != -1) {
            const tragoAnt = this.tragos[index];
            const tragoAct = { ...tragoAnt, ...trago };
            this.tragos.splice(index, 1, tragoAct);
            return tragoAct;
        } else {
            return {};
        }
    }

    eliminarTrago = id => {
        let trago = {}
        const index = this.tragos.findIndex(trago => trago.id === id);
        if (index != -1) {
            trago = this.tragos.splice(index, 1)[0];
        }
        return trago;
    }
}

export default Modelo;