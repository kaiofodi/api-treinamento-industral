export class Sala {
    constructor(nome, capacidade, localizacao) {
        if(!nome || nome.length.trim() < 2) {
            throw new Error('O nome da sala deve ter pelo menos 2 caracteres')
        }
        if(!capacidade || capacidade <= 0) {
            throw new Error('A capacidade da sala deve ser maior que 0')
        }
        if(!localizacao || localizacao === "") {
            throw new Error('A localização da sala deve ser informada')
        }

        this.nome = nome;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
    }

    get nome() {
        return this.nome;
    }

    get capacidade() {
        return this.capacidade;
    }

    get localizacao() {
        return this.localizacao;
    }
}