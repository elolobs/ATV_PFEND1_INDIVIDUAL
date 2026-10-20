import express from 'express';
import cors from 'cors';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Array de produtos em memória
let produtos = [
    {
        id: 1,
        nome: 'Army Bomb',
        categoria: 'Lightstick',
        descricao: 'Lightstick do BTS',
        preco: 350,
        quantidade: 5
    },
    {
        id: 2,
        nome: 'Álbum BTS',
        categoria: 'Álbum',
        descricao: 'Álbum de música do BTS',
        preco: 120,
        quantidade: 10
    }
];

// Rota para testar o servidor
app.get('/api/check', (req, res) => {
    res.status(200).json({
        status: 'ok',
        mensagem: 'Servidor funcionando via HTTP!'
    });
});

// READ — listar todos os produtos
app.get('/api/produtos', (req, res) => {
    res.status(200).json(produtos);
});

// READ — buscar produto por ID
app.get('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    res.status(200).json(produto);
});

// CREATE — cadastrar produto
app.post('/api/produtos', (req, res) => {
    const { nome, categoria, descricao, preco, quantidade } = req.body;

    if (
        typeof nome !== 'string' || !nome.trim() ||
        typeof categoria !== 'string' || !categoria.trim() ||
        typeof descricao !== 'string' || !descricao.trim() ||
        !Number.isFinite(preco) || preco < 0 ||
        !Number.isInteger(quantidade) || quantidade < 0
    ) {
        return res.status(400).json({
            erro: 'Dados do produto inválidos'
        });
    }

    const novoProduto = {
        id: produtos.length > 0
            ? Math.max(...produtos.map((p) => p.id)) + 1
            : 1,
        nome: nome.trim(),
        categoria: categoria.trim(),
        descricao: descricao.trim(),
        preco,
        quantidade
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

// UPDATE — atualizar produto
app.put('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = produtos.findIndex((p) => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    const { nome, categoria, descricao, preco, quantidade } = req.body;

    if (
        typeof nome !== 'string' || !nome.trim() ||
        typeof categoria !== 'string' || !categoria.trim() ||
        typeof descricao !== 'string' || !descricao.trim() ||
        !Number.isFinite(preco) || preco < 0 ||
        !Number.isInteger(quantidade) || quantidade < 0
    ) {
        return res.status(400).json({
            erro: 'Dados do produto inválidos'
        });
    }

    produtos[indice] = {
        id,
        nome: nome.trim(),
        categoria: categoria.trim(),
        descricao: descricao.trim(),
        preco,
        quantidade
    };

    res.status(200).json(produtos[indice]);
});

// DELETE — excluir produto
app.delete('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produtoExiste = produtos.some((p) => p.id === id);

    if (!produtoExiste) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    produtos = produtos.filter((p) => p.id !== id);

    res.status(200).json({
        mensagem: 'Produto excluído com sucesso'
    });
});

// Middleware 404 — manter por último entre as rotas
app.use((req, res) => {
    res.status(404).json({
        erro: `A rota ${req.method} ${req.originalUrl} não existe`
    });
});

// Middleware de erros
app.use((erro, req, res, _next) => {
    console.error('Erro de Sistema:', erro.message);

    res.status(500).json({
        erro: 'Falha interna do servidor'
    });
});