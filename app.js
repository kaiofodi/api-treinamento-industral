import express from 'express';
import instrutorRoutes from './routes/instrutorRoutes.js';
import salaRoutes from './routes/salaRoutes.js';
import treinamentoRoutes from './routes/treinamentoRoutes.js';
import conexao from './database/conexao.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/instrutores', instrutorRoutes);
app.use('/salas', salaRoutes);
app.use('/treinamentos', treinamentoRoutes);

async function iniciarServidor() {
    try {
        const conexaoTest = await conexao.getConnection();
        console.log('Conexão com o banco de dados realizada!');

        conexaoTest.release();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });

    } catch (erro) {
        console.error('Erro ao iniciar o servidor:', erro.message);
        process.exit(1);
    }
}

iniciarServidor();