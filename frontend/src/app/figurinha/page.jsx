"use client"
import Link from "next/link";
import PonyCard from "../../components/cardMlp/PonyCard.jsx";
import "./figurinha.css";

/* ====================================================================
   CÓDIGO DINÂMICO (COMENTADO) - USE QUANDO O BACKEND ESTIVER PRONTO!
   ====================================================================
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
          <h2><i className="fa-solid fa-star iconeEstrela"></i> Minhas Figurinhas</h2>
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
==================================================================== */


// ====================================================================
// CÓDIGO ESTÁTICO - PARA TESTAR O CSS AGORA
// ====================================================================
export default function FigurinhaPage() {
  
  // Usamos um array falso só para o map() desenhar os cards na tela e testarmos o layout
  const figurinhasEstaticas = [
    {
      id: 1,
      nome: 'Twilight Sparkle',
      colecao: 'A Magia da Amizade',
      raridade: 'Rara',
      quantidade: 2,
      imagem: '/img/padrao.png'
    },
    {
      id: 2,
      nome: 'Rainbow Dash',
      colecao: 'A Magia da Amizade',
      raridade: 'Comum',
      quantidade: 4,
      imagem: '/img/padrao.png'
    },
    {
      id: 3,
      nome: 'Pinkie Pie',
      colecao: 'A Magia da Amizade',
      raridade: 'Comum',
      quantidade: 3,
      imagem: '/img/padrao.png'
    }
  ];

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
          {/* Mapeia os dados falsos e gera 3 componentes PonyCard para ver como fica a estilização */}
          {figurinhasEstaticas.map((figurinha) => (
            <PonyCard key={figurinha.id} figurinha={figurinha} />
          ))}
        </div>
      </main>
    </div>
  );
}