import { Instrutor } from '../model/Instrutor.js';
import { cadastrar, listar, deletar, buscarPorId } from '../repository/instrutorRepository.js';

export async function cadastrarInstrutor(req, res) {
    try {
        const {nome, especialidade, email} = req.body;
        const instrutor = new Instrutor(nome, especialidade, email);
        const resultado = await cadastrar(instrutor);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function listarInstrutores(req, res) {
    try {
        const resultado = await listar();
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function buscarInstrutorPorId(req, res) {
    try {
        const id = Number(req.params.id);
        const resultado = await buscarPorId(id);
        if (!resultado) {
            return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function atualizarInstrutor(req, res) {
    try {
        const id = Number(req.params.id);
        const { nome, especialidade, email } = req.body;
        const instrutor = new Instrutor(nome, especialidade, email);
        const resultado = await atualizar(id, instrutor);
        if (resultado === 0) {
            return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
        }
        res.status(200).json({ mensagem: 'Instrutor atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deletarInstrutor(req, res) {
    try {
        const id = Number(req.params.id);
        const resultado = await deletar(id);
        if (resultado === 0) {
            return res.status(404).json({ mensagem: 'Instrutor não encontrado' });
        }
        res.status(200).json({ mensagem: 'Instrutor deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}