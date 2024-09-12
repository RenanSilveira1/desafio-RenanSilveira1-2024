import { Recinto } from './recinto.js';
import { Animal } from './animal.js';

class RecintosZoo {

    constructor() {
        this.recintos = [
            new Recinto(1, 'savana', 10, [{ especie: 'MACACO', quantidade: 3 }]),
            new Recinto(2, 'floresta', 5, []),
            new Recinto(3, 'savana e rio', 7, [{ especie: 'GAZELA', quantidade: 1 }]),
            new Recinto(4, 'rio', 8, []),
            new Recinto(5, 'savana', 9, [{ especie: 'LEAO', quantidade: 1 }])
        ];

        this.animais = {
            LEAO: new Animal('LEAO', 3, ['savana'], true),
            LEOPARDO: new Animal('LEOPARDO', 2, ['savana'], true),
            CROCODILO: new Animal('CROCODILO', 3, ['rio'], true),
            MACACO: new Animal('MACACO', 1, ['savana', 'floresta'], false),
            GAZELA: new Animal('GAZELA', 2, ['savana'], false),
            HIPOPOTAMO: new Animal('HIPOPOTAMO', 4, ['savana', 'rio'], false)
        };
    }

    analisaRecintos(especie, quantidade) {

        if (!this.animais[especie]) {
            return { erro: 'Animal inválido' };
        }

        if (typeof quantidade !== 'number' || quantidade <= 0) {
            return { erro: 'Quantidade inválida' };
        }

        const animal = this.animais[especie];
        const espacoNecessario = animal.tamanho * quantidade;

        let recintosViaveis = [];

        for (let recinto of this.recintos) {

            if (!animal.biomaConfortavel(recinto.bioma)) {
                continue;
            }

            let espacoOcupado = recinto.calculaEspacoOcupado(this.animais);

            if (animal.carnivoro && recinto.animais.length > 0 && recinto.verificaOutraEspecie(especie)) {
                continue;
            }

            if (especie === 'HIPOPOTAMO' && recinto.bioma !== 'savana e rio') {
                continue;
            }

            if (especie === 'MACACO' && quantidade === 1 && recinto.animais.length === 0) {
                continue;
            }

            let espacoFinalNecessario = espacoNecessario;
            if (recinto.animais.length > 0 && recinto.verificaOutraEspecie(especie)) {
                espacoFinalNecessario += 1;
            }

            let espacoLivre = recinto.tamanhoTotal - espacoOcupado - espacoFinalNecessario;

            if (espacoLivre >= 0) {
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`);
            }
        }

        if (recintosViaveis.length === 0) {
            return { erro: 'Não há recinto apto para o animal' };
        }

        return { recintosViaveis };
    }
}

export { RecintosZoo };
