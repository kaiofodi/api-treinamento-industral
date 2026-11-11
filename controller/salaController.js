import { Sala } from '../model/Sala.js';
import { atualizar, cadastrar, listar, deletar, buscarPorId } from '../repository/salaRepository.js';

export async function cadastrarSala(req, res) {
    try {
        const { nome, capacidade } = req.body;
        const sala = new Sala(nome, capacidade);
        const resultado = await cadastrar(sala);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function listarSalas(req, res) {
    try {
        const resultado = await listar();
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function buscarSalaPorId(req, res) {
    try {
        const id = Number(req.params.id);
        const resultado = await buscarPorId(id);
        if (!resultado) {
            return res.status(404).json({ mensagem: 'Sala não encontrada' });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function atualizarSala(req, res) {
    try {
        const id = Number(req.params.id);
        const { nome, capacidade } = req.body;
        const sala = new Sala(nome, capacidade);
        const resultado = await atualizar(id, sala);
        if (resultado === 0) {
            return res.status(404).json({ mensagem: 'Sala não encontrada' });
        }
        res.status(200).json({ mensagem: 'Sala atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deletarSala(req, res) {
    try {
        const id = Number(req.params.id);
        const resultado = await deletar(id);
        if (resultado === 0) {
            return res.status(404).json({ mensagem: 'Sala não encontrada' });
        }
        res.status(200).json({ mensagem: 'Sala deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}