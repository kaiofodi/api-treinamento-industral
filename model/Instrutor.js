export class Instrutor {
    constructor(nome, especialidade, email) {
        if(!nome || nome.length.trim() < 3) {
            throw new Error('O nome deve ter pelo menos 3 caracteres')
        }

        if(!especialidade || especialidade === "") {
            throw new Error('A especialidade deve ser informada')
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email || email.length < 5 || !emailValido.test(email)) {
            throw new Error('O email deve ser válido')
        }

        this.nome = nome;
        this.especialidade = especialidade;
        this.email = email;
    }

    get nome() {
        return this.nome;
    }

    get especialidade() {
        return this.especialidade;
    }

    get email() {
        return this.email;
    }
}