class Recinto {
    constructor(numero, bioma, tamanhoTotal, animais = []) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animais = animais;
    }

    calculaEspacoOcupado(permitidos) {
        return this.animais.reduce((espaco, animal) => {
            return espaco + permitidos[animal.especie].tamanho * animal.quantidade;
        }, 0);
    }

    verificaOutraEspecie(especieAtual) {
        return this.animais.some(animal => animal.especie !== especieAtual);
    }
}

export { Recinto };
