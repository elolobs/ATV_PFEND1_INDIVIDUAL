import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { mkdirSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const app = express();
const uploadDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'uploads');
mkdirSync(uploadDir, { recursive: true });

const extensoesPermitidas = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/webp': '.webp'
};

const uploadImagem = multer({
    storage: multer.diskStorage({
        destination: uploadDir,
        filename: (_req, file, callback) => {
            callback(null, `${randomUUID()}${extensoesPermitidas[file.mimetype]}`);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, callback) => {
        if (!extensoesPermitidas[file.mimetype]) {
            return callback(new Error('Envie uma imagem PNG, JPEG, GIF ou WEBP.'));
        }
        callback(null, true);
    }
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadDir));

let figurinhas = [
    // --- MANE SIX ---
    {
        id: 1,
        nome: 'Twilight Sparkle',
        personagem: 'twilight',
        colecao: 'magia_amizade',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'A Princesa da Amizade!',
        imagem: '../img/twilight2.png'
    },
    {
        id: 2,
        nome: 'Rainbow Dash',
        personagem: 'rainbow',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 4,
        descricao: 'A pônei mais rápida de Ponyville.',
        imagem: '../img/rainbow.png'
    },
    {
        id: 3,
        nome: 'Pinkie Pie',
        personagem: 'pinkie',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 3,
        descricao: 'Sempre pronta para uma festa!',
        imagem: '../img/pinkiepie.png'
    },
    {
        id: 4,
        nome: 'Applejack',
        personagem: 'applejack',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 5,
        descricao: 'A pônei mais honesta do Rancho Maçã Doce.',
        imagem: '/img/applejack.png'
    },
    {
        id: 5,
        nome: 'Rarity',
        personagem: 'rarity',
        colecao: 'magia_amizade',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'Fabulosa, generosa e cheia de estilo.',
        imagem: '/img/rarity.png'
    },
    {
        id: 6,
        nome: 'Fluttershy',
        personagem: 'fluttershy',
        colecao: 'magia_amizade',
        raridade: 'comum',
        quantidade: 3,
        descricao: 'Tímida e a melhor amiga dos animais.',
        imagem: '/img/fluttershy.png'
    },

    // --- PRINCESAS ---
    {
        id: 7,
        nome: 'Princesa Celestia',
        personagem: 'celestia',
        colecao: 'cristais',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'A governante de Equestria que traz o Sol.',
        imagem: '/img/celestia.png'
    },
    {
        id: 8,
        nome: 'Princesa Luna',
        personagem: 'luna',
        colecao: 'cristais',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'A princesa da noite e guardiã dos sonhos.',
        imagem: '/img/luna.png'
    },
    {
        id: 9,
        nome: 'Princesa Cadance',
        personagem: 'cadance',
        colecao: 'realeza',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'A princesa do amor e do Império de Cristal.',
        imagem: '/img/cadance.png'
    },

    // --- ALIADOS E OUTROS ---
    {
        id: 10,
        nome: 'Discórdia',
        personagem: 'discordia',
        colecao: 'caos_e_magia',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'O draconequus mestre do caos e da desordem!',
        imagem: '/img/discordia.png'
    },
    {
        id: 11,
        nome: 'Spike',
        personagem: 'spike',
        colecao: 'aliados',
        raridade: 'comum',
        quantidade: 6,
        descricao: 'O dragão número um e assistente fiel da Twilight.',
        imagem: '/img/spike.png'
    },
    {
        id: 12,
        nome: 'Starlight Glimmer',
        personagem: 'starlight',
        colecao: 'magia_amizade',
        raridade: 'rara',
        quantidade: 2,
        descricao: 'Uma unicórnio poderosa com um talento incrível.',
        imagem: '/img/starlight.png'
    },
    {
        id: 13,
        nome: 'A Grande e Poderosa Trixie',
        personagem: 'trixie',
        colecao: 'aliados',
        raridade: 'rara',
        quantidade: 1,
        descricao: 'A ilusionista mais teatral de toda Equestria!',
        imagem: '/img/trixie.png'
    },

    // --- VILÕES ---
    {
        id: 14,
        nome: 'Rainha Chrysalis',
        personagem: 'chrysalis',
        colecao: 'viloes',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'A temível Rainha dos Mutantes.',
        imagem: '/img/chrysalis.png'
    },
    {
        id: 15,
        nome: 'Rei Sombra',
        personagem: 'sombra',
        colecao: 'viloes',
        raridade: 'super_rara',
        quantidade: 1,
        descricao: 'O antigo e sombrio governante do Império de Cristal.',
        imagem: '/img/sombra.png'
    }
];

app.get('/api/check', (req, res) => {
    res.status(200).json({
        status: 'ok',
        mensagem: 'Servidor das figurinhas funcionando via HTTP!'
    });
});

app.post('/api/upload', (req, res, next) => {
    uploadImagem.single('imagem')(req, res, (erro) => {
        if (erro) {
            return res.status(400).json({
                erro: erro.message || 'Não foi possível enviar a imagem.'
            });
        }
        next();
    });
}, (req, res) => {
    if (!req.file) {
        return res.status(400).json({ erro: 'Selecione uma imagem para enviar.' });
    }

    res.status(201).json({
        imagem: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    });
});

app.get('/api/figurinhas', (req, res) => {
    res.status(200).json(figurinhas);
});

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

app.post('/api/figurinhas', (req, res) => {
    const { nome, personagem, colecao, raridade, quantidade, descricao, imagem } = req.body;

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
        descricao: descricao ? descricao.trim() : '',
        imagem: typeof imagem === 'string' && imagem.trim() ? imagem.trim() : ''
    };

    figurinhas.push(novaFigurinha);

    res.status(201).json(novaFigurinha);
});

app.put('/api/figurinhas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = figurinhas.findIndex((f) => f.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Figurinha não encontrada'
        });
    }

    const { nome, personagem, colecao, raridade, quantidade, descricao, imagem } = req.body;

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
        descricao: descricao ? descricao.trim() : '',
        imagem: typeof imagem === 'string' && imagem.trim()
            ? imagem.trim()
            : figurinhas[indice].imagem
    };

    res.status(200).json(figurinhas[indice]);
});

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

app.use((req, res) => {
    res.status(404).json({
        erro: `A rota ${req.method} ${req.originalUrl} não existe`
    });
});

app.use((erro, req, res, _next) => {
    console.error('Erro de Sistema:', erro.message);

    res.status(500).json({
        erro: 'Falha interna do servidor'
    });
});