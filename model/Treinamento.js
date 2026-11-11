export class Treinamento {
    constructor(nome, cargaHoraria, modalidade) {
        if(!nome || nome.length.trim() < 3) {
            throw new Error('O nome deve ter pelo menos 3 caracteres')
        }
        if(!cargaHoraria || cargaHoraria <= 0) {
            throw new Error('A carga horária deve ser maior que 0')
        }
        if(!modalidade || modalidade === "") {
            throw new Error('A modalidade deve ser informada')
        }

    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.modalidade = modalidade;
    }

    get nome(){
        return this.nome;
    }

    get cargaHoraria(){
        return this.cargaHoraria;
    }

    get modalidade(){
        return this.modalidade;
    }
}