class Animal {
    constructor(especie, tamanho, biomas, carnivoro = false){
        this.especie = especie;
        this.tamanho = tamanho;
        this.biomas = biomas;
        this.carnivoro = carnivoro;
    }

    biomaConfortavel(biomaRecinto){
        if(biomaRecinto === 'savana e rio') {
            return this.biomas.includes('savana') || this.biomas.includes('rio');
        }

        return this.biomas.includes(biomaRecinto);
    }
}

export default Animal;