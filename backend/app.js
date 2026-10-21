import express from 'express';
import cors from 'cors';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Array de figurinhas em memória (já populado para você testar o visual!)
let figurinhas = [
   {
        id: 1,
        nome: 'Twilight Sparkle',
        personagem: 'twilight',
        colecao: 'magia_amizade',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'A Princesa da Amizade!'
    },
    {
        id: 2,
        nome: 'Rainbow Dash',
        personagem: 'rainbow',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 4,
        descricao: 'A pônei mais rápida de Ponyville.'
    },
    {
        id: 3,
        nome: 'Pinkie Pie',
        personagem: 'pinkie',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 3,
        descricao: 'Sempre pronta para uma festa!'
    },
    {
        id: 4,
        nome: 'Applejack',
        personagem: 'applejack',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 5,
        descricao: 'A pônei mais honesta do Rancho Maçã Doce.'
    },
    {
        id: 5,
        nome: 'Rarity',
        personagem: 'rarity',
        colecao: 'magia_amizade',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'Fabulosa, generosa e cheia de estilo.'
    },
    {
        id: 6,
        nome: 'Fluttershy',
        personagem: 'fluttershy',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 3,
        descricao: 'Tímida e a melhor amiga dos animais.'
    },

    // --- PRINCESAS ---
    {
        id: 7,
        nome: 'Princesa Celestia',
        personagem: 'celestia',
        colecao: 'realeza',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'A governante de Equestria que traz o Sol.'
    },
    {
        id: 8,
        nome: 'Princesa Luna',
        personagem: 'luna',
        colecao: 'realeza',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'A princesa da noite e guardiã dos sonhos.'
    },
    {
        id: 9,
        nome: 'Princesa Cadance',
        personagem: 'cadance',
        colecao: 'realeza',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'A princesa do amor e do Império de Cristal.'
    },

    // --- ALIADOS E OUTROS ---
    {
        id: 10,
        nome: 'Discórdia',
        personagem: 'discordia',
        colecao: 'caos_e_magia',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'O draconequus mestre do caos e da desordem!'
    },
    {
        id: 11,
        nome: 'Spike',
        personagem: 'spike',
        colecao: 'aliados',
        raridade: 'comum',
        quantidade: 6,
        descricao: 'O dragão número um e assistente fiel da Twilight.'
    },
    {
        id: 12,
        nome: 'Starlight Glimmer',
        personagem: 'starlight',
        colecao: 'magia_amizade',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'Uma unicórnio poderosa com um talento incrível para magia.'
    },
    {
        id: 13,
        nome: 'A Grande e Poderosa Trixie',
        personagem: 'trixie',
        colecao: 'aliados',
        raridade: 'rara',
        quantidade: 1,
        descricao: 'A ilusionista mais teatral de toda Equestria!'
    },

    // --- VILÕES ---
    {
        id: 14,
        nome: 'Rainha Chrysalis',
        personagem: 'chrysalis',
        colecao: 'viloes',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'A temível Rainha dos Mutantes (Changelings).'
    },
    {
        id: 15,
        nome: 'Rei Sombra',
        personagem: 'sombra',
        colecao: 'viloes',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'O antigo e sombrio governante do Império de Cristal.'
    }
];

// Rota para testar o servidor
app.get('/api/check', (req, res) => {
    res.status(200).json({
        status: 'ok',
        mensagem: 'Servidor das figurinhas funcionando via HTTP!'
    });
});

// READ — listar todas as figurinhas
app.get('/api/figurinhas', (req, res) => {
    res.status(200).json(figurinhas);
});

// READ — buscar figurinha por ID
app.get('/api/figurinhas/:id', (req, res) => {
    const id = Number(req.params.id);

    const figurinha = figurinhas.find((f) => f.id === id);

    if (!figurinha) {
        return res.status(404).json({
            erro: 'Figurinha não encontrada'
        });
    }

    res.status(200).json(figurinha);
});

// CREATE — cadastrar nova figurinha
app.post('/api/figurinhas', (req, res) => {
    const { nome, personagem, colecao, raridade, quantidade, descricao } = req.body;

    // Validação dos dados obrigatórios
    if (
        typeof nome !== 'string' || !nome.trim() ||
        typeof personagem !== 'string' || !personagem.trim() ||
        typeof colecao !== 'string' || !colecao.trim() ||
        typeof raridade !== 'string' || !raridade.trim() ||
        !Number.isInteger(Number(quantidade)) || Number(quantidade) < 1
    ) {
        return res.status(400).json({
            erro: 'Dados da figurinha inválidos'
        });
    }

    const novaFigurinha = {
        id: figurinhas.length > 0
            ? Math.max(...figurinhas.map((f) => f.id)) + 1
            : 1,
        nome: nome.trim(),
        personagem: personagem.trim(),
        colecao: colecao.trim(),
        raridade: raridade.trim(),
        quantidade: Number(quantidade),
        descricao: descricao ? descricao.trim() : '' // Descrição é opcional
    };

    figurinhas.push(novaFigurinha);

    res.status(201).json(novaFigurinha);
});

// UPDATE — atualizar figurinha
app.put('/api/figurinhas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = figurinhas.findIndex((f) => f.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Figurinha não encontrada'
        });
    }

    const { nome, personagem, colecao, raridade, quantidade, descricao } = req.body;

    if (
        typeof nome !== 'string' || !nome.trim() ||
        typeof personagem !== 'string' || !personagem.trim() ||
        typeof colecao !== 'string' || !colecao.trim() ||
        typeof raridade !== 'string' || !raridade.trim() ||
        !Number.isInteger(Number(quantidade)) || Number(quantidade) < 1
    ) {
        return res.status(400).json({
            erro: 'Dados da figurinha inválidos'
        });
    }

    figurinhas[indice] = {
        id,
        nome: nome.trim(),
        personagem: personagem.trim(),
        colecao: colecao.trim(),
        raridade: raridade.trim(),
        quantidade: Number(quantidade),
        descricao: descricao ? descricao.trim() : ''
    };

    res.status(200).json(figurinhas[indice]);
});

// DELETE — excluir figurinha
app.delete('/api/figurinhas/:id', (req, res) => {
    const id = Number(req.params.id);

    const figurinhaExiste = figurinhas.some((f) => f.id === id);

    if (!figurinhaExiste) {
        return res.status(404).json({
            erro: 'Figurinha não encontrada'
        });
    }

    figurinhas = figurinhas.filter((f) => f.id !== id);

    res.status(200).json({
        mensagem: 'Figurinha excluída com sucesso'
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