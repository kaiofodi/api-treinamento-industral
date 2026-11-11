import conexao from '../database/conexao.js';

export async function cadastrar(sala) {
    const sql = 'INSERT INTO sala (nome, capacidade) VALUES (?, ?)';
    const [resultado] = await conexao.execute(sql, [
        sala.nome,
        sala.capacidade
    ])
    return resultado;
}

export async function listar() {
    const sql = 'SELECT * FROM sala';
    const [resultado] = await conexao.execute(sql);
    return resultado;
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM sala WHERE id_sala = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado[0];
}

export async function atualizar(id, sala) {
    const sql = 'UPDATE sala SET nome = ?, capacidade = ? WHERE id_sala = ?';
    const [resultado] = await conexao.execute(sql, [
        sala.nome,
        sala.capacidade,
        id
    ])
    return resultado.affectedRows;
}

export async function deletar(id) {
    const sql = 'DELETE FROM sala WHERE id_sala = ?';
    const [resultado] = await conexao.execute(sql, [id]);
    return resultado.affectedRows;
}

