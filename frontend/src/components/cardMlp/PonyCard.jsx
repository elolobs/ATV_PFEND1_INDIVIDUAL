import Link from "next/link";
import "./card.css"; 

export default function PonyCard({ figurinha, deletarFigurinha }) {
  let corRaridade = "#5DADE2"; 
  if (figurinha.raridade.toLowerCase() === "rara") corRaridade = "#8a4dd8"; 
  if (figurinha.raridade.toLowerCase() === "super_rara" || figurinha.raridade.toLowerCase() === "super-rara") corRaridade = "#ff6b81"; 

  return (
    <div className="card-figurinha">
      <div className="card-imagem">
        <img src={figurinha.imagem || "/img/padrao.png"} alt={figurinha.nome} />
      </div>
      
      <div className="card-info">
        <h3>{figurinha.nome}</h3>
        <p className="colecao">{figurinha.colecao}</p>
        <span className="tag-raridade" style={{ backgroundColor: corRaridade }}>
          {figurinha.raridade}
        </span>
        <p className="quantidade">Qtd: {figurinha.quantidade}</p>
      </div>

      <div className="card-acoes">
        <Link href={`/edicao/${figurinha.id}`} className="btn-editar">✏️</Link>
        <button 
          onClick={() => deletarFigurinha && deletarFigurinha(figurinha.id)} 
          className="btn-excluir"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}