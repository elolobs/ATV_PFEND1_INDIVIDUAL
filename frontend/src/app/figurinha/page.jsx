"use client"

// import { useState, useEffect } from "react";
import Link from "next/link";
import "./figurinha.css";

/* ====================================================================
   CÓDIGO DINÂMICO (COMENTADO) - USE QUANDO O BACKEND ESTIVER PRONTO!
   ====================================================================
export default function Figurinha() {
  const [figurinhas, setFigurinhas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/figurinhas")
      .then((resposta) => resposta.json())
      .then((dados) => setFigurinhas(dados))
      .catch((erro) => console.error("Erro ao buscar dados do Node:", erro));
  }, []);

  const deletarFigurinha = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/figurinhas/${id}`, { 
        method: "DELETE" 
      });
      setFigurinhas(figurinhas.filter((fig) => fig.id !== id));
    } catch (erro) {
      console.error("Erro ao deletar:", erro);
    }
  };

  return (
   <div className="background-container">
    <main className="lista-container">
      <div className="lista-header">
        <h2><i className="fa-solid fa-star iconeEstrela"></i>  Minhas Figurinhas</h2>
        <Link href="/cadastro" className="btn-nova-figurinha">
          + Nova figurinha
        </Link>
      </div>

      <div className="grid-figurinhas">
        {figurinhas.length === 0 ? (
          <p className="mensagem-vazia">Nenhuma figurinha cadastrada ainda.</p>
        ) : (
          figurinhas.map((figurinha) => (
            <div className="card-figurinha" key={figurinha.id}>
              <div className="card-imagem">
                <img src="/img/padrao.png" alt={figurinha.nome} />
              </div>
              <div className="card-info">
                <h3>{figurinha.nome}</h3>
                <p className="colecao">{figurinha.colecao}</p>
                <span className="tag-raridade">{figurinha.raridade}</span>
                <p className="quantidade">Qtd: {figurinha.quantidade}</p>
              </div>
              <div className="card-acoes">
                <Link href={`/editar/${figurinha.id}`} className="btn-editar">✏️</Link>
                <button onClick={() => deletarFigurinha(figurinha.id)} className="btn-excluir">🗑️</button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
    </div>
  );
}
==================================================================== */


// ====================================================================
// CÓDIGO ESTÁTICO - PARA TESTAR O CSS AGORA
// ====================================================================
export default function Figurinha() {
  return (
    <div className="background-container">
    <main className="lista-container">
      <div className="lista-header">
        <h2><i className="fa-solid fa-star iconeEstrela"></i> Minhas Figurinhas</h2>
        <Link href="/cadastro" className="btn-nova-figurinha">
          + Nova figurinha
        </Link>
      </div>

      <div className="grid-figurinhas">
        
        {/* CARD 1 - Twilight Sparkle */}
        <div className="card-figurinha">
          <div className="card-imagem">
            <img src="/img/padrao.png" alt="Twilight Sparkle" />
          </div>
          <div className="card-info">
            <h3>Twilight Sparkle</h3>
            <p className="colecao">A Magia da Amizade</p>
            <span className="tag-raridade" style={{ backgroundColor: '#8a4dd8' }}>Rara</span>
            <p className="quantidade">Qtd: 2</p>
          </div>
          <div className="card-acoes">
            <Link href={`/edicao/1`} className="btn-editar">✏️</Link>
            <button className="btn-excluir">🗑️</button>
          </div>
        </div>

        {/* CARD 2 - Rainbow Dash */}
        <div className="card-figurinha">
          <div className="card-imagem">
            <img src="/img/padrao.png" alt="Rainbow Dash" />
          </div>
          <div className="card-info">
            <h3>Rainbow Dash</h3>
            <p className="colecao">A Magia da Amizade</p>
            <span className="tag-raridade" style={{ backgroundColor: '#5DADE2' }}>Comum</span>
            <p className="quantidade">Qtd: 4</p>
          </div>
          <div className="card-acoes">
            <Link href={`/editar/2`} className="btn-editar">✏️</Link>
            <button className="btn-excluir">🗑️</button>
          </div>
        </div>

        {/* CARD 3 - Pinkie Pie */}
        <div className="card-figurinha">
          <div className="card-imagem">
            <img src="/img/padrao.png" alt="Pinkie Pie" />
          </div>
          <div className="card-info">
            <h3>Pinkie Pie</h3>
            <p className="colecao">A Magia da Amizade</p>
            <span className="tag-raridade" style={{ backgroundColor: '#5DADE2' }}>Comum</span>
            <p className="quantidade">Qtd: 3</p>
          </div>
          <div className="card-acoes">
            <Link href={`/editar/3`} className="btn-editar">✏️</Link>
            <button className="btn-excluir">🗑️</button>
          </div>
        </div>

      </div>
    </main>
  </div>);
}