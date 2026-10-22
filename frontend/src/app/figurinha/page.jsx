"use client"
import React, { useState, useEffect } from "react"; 
import Link from "next/link";
import PonyCard from "../../components/cardMlp/PonyCard.jsx";
import "./figurinha.css";

export default function FigurinhaPage() {
  const [figurinhas, setFigurinhas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/figurinhas")
      .then((resposta) => resposta.json())
      .then((dados) => setFigurinhas(dados))
      .catch((erro) => console.error("Erro ao buscar figurinhas:", erro));
  }, []);

  const deletarFigurinha = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/figurinhas/${id}`, { method: "DELETE" });
      setFigurinhas(figurinhas.filter((fig) => fig.id !== id));
    } catch (erro) {
      console.error("Erro ao deletar:", erro);
    }
  };

  return (
    <div className="background-container">
      <main className="lista-container">
        <div className="lista-header">
          <h2>
            <i className="fa-solid fa-star iconeEstrela"></i> Minhas Figurinhas
          </h2>
          <Link href="/cadastro" className="btn-nova-figurinha">
            + Nova figurinha
          </Link>
        </div>

        <div className="grid-figurinhas">
          {figurinhas.length === 0 ? (
            <p className="mensagem-vazia">Nenhuma figurinha cadastrada ainda.</p>
          ) : (
            figurinhas.map((figurinha) => (
              <PonyCard
                key={figurinha.id}
                figurinha={figurinha}
                deletarFigurinha={deletarFigurinha}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}