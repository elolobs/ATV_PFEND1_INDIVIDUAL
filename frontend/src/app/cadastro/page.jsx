"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./cadastro.css";

const API_URL = "http://localhost:3001/api/figurinhas";
const UPLOAD_URL = "http://localhost:3001/api/upload";

const figurinhaInicial = {
  nome: "",
  personagem: "",
  colecao: "",
  raridade: "",
  quantidade: "",
  descricao: "",
  imagem: "",
};

export default function Cadastro() {
  const router = useRouter();
  const [figurinha, setFigurinha] = useState(figurinhaInicial);
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [enviandoImagem, setEnviandoImagem] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFigurinha((atual) => ({ ...atual, [name]: value }));
  };

  const handleUploadImagem = async (event) => {
    const arquivo = event.target.files?.[0];
    if (!arquivo) return;

    setErro("");
    setEnviandoImagem(true);

    try {
      const formulario = new FormData();
      formulario.append("imagem", arquivo);
      const resposta = await fetch(UPLOAD_URL, { method: "POST", body: formulario });
      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.erro || "Não foi possível enviar a imagem.");
      }

      setFigurinha((atual) => ({ ...atual, imagem: dados.imagem }));
    } catch (error) {
      setErro(error.message || "Não foi possível conectar ao servidor.");
    } finally {
      setEnviandoImagem(false);
      event.target.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErro("");
    setSalvando(true);

    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...figurinha,
          quantidade: Number(figurinha.quantidade),
        }),
      });

      const dados = await resposta.json();
      if (!resposta.ok) {
        throw new Error(dados.erro || "Não foi possível cadastrar a figurinha.");
      }

      router.push("/figurinha");
    } catch (error) {
      setErro(error.message || "Não foi possível conectar ao servidor.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <main className="cadastro-container">
      <div className="cadastro-header">
        <h2><i className="fa-solid fa-star iconeEstrela"></i> Cadastrar figurinha</h2>
      </div>

      <div className="cadastro-card">
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome da figurinha <span>*</span></label>
            <input id="nome" name="nome" type="text" placeholder="Ex: Twilight Sparkle" value={figurinha.nome} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="personagem">Personagem <span>*</span></label>
            <select id="personagem" name="personagem" value={figurinha.personagem} onChange={handleChange} required>
              <option value="">Selecione o personagem</option>
              <option value="twilight">Twilight Sparkle</option>
              <option value="pinkie">Pinkie Pie</option>
              <option value="rainbow">Rainbow Dash</option>
              <option value="applejack">Applejack</option>
              <option value="rarity">Rarity</option>
              <option value="fluttershy">Fluttershy</option>
              <option value="celestia">Princesa Celestia</option>
              <option value="luna">Princesa Luna</option>
              <option value="cadance">Princesa Cadance</option>
              <option value="discordia">Discórdia</option>
              <option value="spike">Spike</option>
              <option value="starlight">Starlight Glimmer</option>
              <option value="trixie">Trixie</option>
              <option value="chrysalis">Rainha Chrysalis</option>
              <option value="sombra">Rei Sombra</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="colecao">Coleção <span>*</span></label>
            <select id="colecao" name="colecao" value={figurinha.colecao} onChange={handleChange} required>
              <option value="">Selecione a coleção</option>
              <option value="magia_amizade">A Magia da Amizade</option>
              <option value="aventuras">Aventuras em Equestria</option>
              <option value="cristais">Reino dos Cristais</option>
              <option value="realeza">Realeza</option>
              <option value="caos_e_magia">Caos e Magia</option>
              <option value="aliados">Aliados</option>
              <option value="viloes">Vilões</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="raridade">Raridade <span>*</span></label>
            <select id="raridade" name="raridade" value={figurinha.raridade} onChange={handleChange} required>
              <option value="">Selecione a raridade</option>
              <option value="comum">Comum</option>
              <option value="rara">Rara</option>
              <option value="super_rara">Super-rara</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantidade">Quantidade <span>*</span></label>
            <input id="quantidade" name="quantidade" type="number" placeholder="Ex: 1" min="1" step="1" value={figurinha.quantidade} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição (opcional)</label>
            <input id="descricao" name="descricao" type="text" placeholder="Ex: Figurinha com acabamento brilhante..." value={figurinha.descricao} onChange={handleChange} />
          </div>

          {erro && <p role="alert">{erro}</p>}
          <button type="submit" className="btn-salvar" disabled={salvando || enviandoImagem}>
            {salvando ? "Salvando..." : "Salvar figurinha"}
          </button>
        </form>

        <div className="cadastro-imagem-section">
          <label htmlFor="imagem" className="upload-box">
            <div className="upload-icon">📷</div>
            <p className="upload-title">{enviandoImagem ? "Enviando imagem..." : "Adicionar imagem"}</p>
            <p className="upload-subtitle">Clique para selecionar uma imagem</p>
            <input id="imagem" type="file" accept="image/png,image/jpeg,image/gif,image/webp" onChange={handleUploadImagem} disabled={enviandoImagem} style={{ display: "none" }} />
          </label>

          <div className="pony-illustration">
            <img src={figurinha.imagem || "/img/pinkie.png"} alt={figurinha.imagem ? "Imagem da figurinha" : "Pinkie Pie"} />
          </div>
        </div>
      </div>
    </main>
  );
}
