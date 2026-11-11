import conexao from '../database/conexao.js';

export async function cadastrar(treinamento) {
    const sql = 'INSERT INTO treinamento (nome, data_inicio, data_fim, id_instrutor, id_sala) VALUES (?, ?, ?, ?, ?)';
    const [resultado] = await conexao.execute(sql, [
        treinamento.nome,
        treinamento.data_inicio,
        treinamento.data_fim,
        treinamento.id_instrutor,
        treinamento.id_sala
    ])
    return resultado;
}

export async function listar() {
    const sql = 'SELECT * FROM treinamento';
    const [resultado] = await conexao.execute(sql);
    return resultado;
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM treinamento WHERE id_treinamento = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado[0];
}

export async function atualizar(id, treinamento) {
    const sql = 'UPDATE treinamento SET nome = ?, data_inicio = ?, data_fim = ?, id_instrutor = ?, id_sala = ? WHERE id_treinamento = ?';
    const [resultado] = await conexao.execute(sql, [
        treinamento.nome,
        treinamento.data_inicio,
        treinamento.data_fim,
        treinamento.id_instrutor,
        treinamento.id_sala,
        id
    ])
    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = 'DELETE FROM treinamento WHERE id_treinamento = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}