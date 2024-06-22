class Modelo {

    vinos = [];

    constructor() {
        this.vinos = [
            { id: "1", nombre: "Old Fashioned", precio: 12342.43 },
            { id: "2", nombre: "Negroni", precio: 1233.43 },
            { id: "3", nombre: "Manhattan", precio: 1235.43 },
            { id: "4", nombre: "Daiquiri", precio: 1236.43 },
            { id: "5", nombre: "Margarita", precio: 123.43 },
            { id: "6", nombre: "Mojito", precio: 1223.43 },
        ]
    }

    obtenerVinos = () => this.vinos;

    obtenerVino = id => {
        const vino = this.vinos.find(vino => vino.id === id);
        return vino || {};
    }

    guardarVino = vino => {
        const id = String(parseInt(this.vinos[this.vinos.length - 1]?.id || 0) + 1);
        const vinoConId = { id, ...vino };
        this.vinos.push(vinoConId);
        return vinoConId;
    }

    editarVino = (id, vino) => {
        const index = this.vinos.findIndex(vino => vino.id === id);

        if (index != -1) {
            const vinoAnt = this.vinos[index];
            const vinoAct = { ...vinoAnt, ...vino };
            this.vinos.splice(index, 1, vinoAct);
            return vinoAct;
        } else {
            return {};
        }
    }

    eliminarVino = id => {
        let vino = {}
        const index = this.vinos.findIndex(vino => vino.id === id);
        if (index != -1) {
            vino = this.vinos.splice(index, 1)[0];
        }
        return vino;
    }
}

export default Modelo;