class Recinto {
    constructor(numero, bioma, tamanhoTotal, animais = []){
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animais = animais;
    }

    calculaEspacoOcupado(permitidos) {
        let espacoOcupado = 0;
        for (let animal of this.animais) {
            espacoOcupado += permitidos[animal.especie].tamanho * animal.quantidade;
        }

        return espacoOcupado;
    }

    verificaOutraEspecie(especie){
        return this.animais.some(animal => animal.especie !== especie);
    }

    adicionaEspecie(especie, quantidade) {
        this.animais.push({ especie, quantidade });
    }
}

export default Recinto;