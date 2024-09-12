class Animal {
    constructor(especie, tamanho, biomas, carnivoro) {
        this.especie = especie;
        this.tamanho = tamanho;
        this.biomas = biomas;
        this.carnivoro = carnivoro;
    }

    biomaConfortavel(bioma) {
        return this.biomas.includes(bioma);
    }
}

export { Animal };
