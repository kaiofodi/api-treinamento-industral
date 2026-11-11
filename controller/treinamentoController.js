import { Treinamento } from '../model/Treinamento.js';
import { atualizar, cadastrar, listar, deletar, buscarPorId } from '../repository/treinamentoRepository.js';

export async function cadastrarTreinamento(req, res) {
    try {
        const { nome, data_inicio, data_fim, id_instrutor, id_sala } = req.body;
        const treinamento = new Treinamento(nome, data_inicio, data_fim, id_instrutor, id_sala);
        const resultado = await cadastrar(treinamento);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function listarTreinamentos(req, res) {
    try {
        const resultado = await listar();
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function buscarTreinamentoPorId(req, res) {
    try {
        const id = Number(req.params.id);
        const resultado = await buscarPorId(id);
        if (!resultado) {
            return res.status(404).json({ mensagem: 'Treinamento não encontrado' });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function atualizarTreinamento(req, res) {
    try {
        const id = Number(req.params.id);
        const { nome, data_inicio, data_fim, id_instrutor, id_sala } = req.body;
        const treinamento = new Treinamento(nome, data_inicio, data_fim, id_instrutor, id_sala);
        const resultado = await atualizar(id, treinamento);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deletarTreinamento(req, res) {
    try {
        const id = Number(req.params.id);
        const resultado = await deletar(id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}