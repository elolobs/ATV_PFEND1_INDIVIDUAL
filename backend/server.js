//aqui vai ficar a conf do express


const express = require('express');
const cors = require('cors'); 
const app = express();

// Middlewares essenciais
app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Permite receber dados no formato JSON (para o cadastro/edição)

// Requisito 3: Array em memória (reinicia quando o servidor reinicia)
let figurinhas = [
  { id: 1, nome: 'Twilight Sparkle', raridade: 'Rara', quantidade: 2 }
];

// Rota para LISTAR (GET)
app.get('/api/figurinhas', (req, res) => {
  res.json(figurinhas);
});

// Rota para CADASTRAR (POST)
app.post('/api/figurinhas', (req, res) => {
  const novaFigurinha = { 
    id: Date.now(), // Gera um ID único simples
    ...req.body 
  };
  figurinhas.push(novaFigurinha);
  res.status(201).json(novaFigurinha);
});

// Você precisará criar também o app.put (EDITAR) e app.delete (EXCLUIR)

// O Express vai rodar na porta 3001 para não conflitar com o Next (que usa a 3000)
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});