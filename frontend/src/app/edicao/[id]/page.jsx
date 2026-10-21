"use client";

import { useParams } from "next/navigation";
// IMPORTANTE: Ajuste o caminho do CSS abaixo de acordo com onde você salvou o cadastro.css
import "./edicao.css"; 

/* ====================================================================
   CÓDIGO DINÂMICO (COMENTADO) - USE QUANDO O BACKEND ESTIVER PRONTO!
   ====================================================================
import { useState, useEffect } from "react";

export default function EditarFigurinha() {
    const params = useParams();
    const idDaFigurinha = params.id;
    
    const [figurinha, setFigurinha] = useState({
        nome: "", personagem: "", colecao: "", raridade: "", quantidade: "", descricao: ""
    });

    // Busca os dados da figurinha específica no Node/Express
    useEffect(() => {
        fetch(`http://localhost:3001/api/figurinhas/${idDaFigurinha}`)
            .then((resposta) => resposta.json())
            .then((dados) => setFigurinha(dados))
            .catch((erro) => console.error("Erro ao buscar dados:", erro));
    }, [idDaFigurinha]);

    // Atualiza o estado quando o usuário digita nos campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFigurinha(prev => ({ ...prev, [name]: value }));
    };

    // Envia os dados atualizados para o Express (PUT)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:3001/api/figurinhas/${idDaFigurinha}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(figurinha)
            });
            alert("Figurinha atualizada com sucesso!");
            // Aqui você pode redirecionar o usuário de volta para a lista usando o useRouter()
        } catch (erro) {
            console.error("Erro ao atualizar:", erro);
        }
    };

    return (
        // ... (O mesmo HTML da versão estática abaixo, mas usando value={figurinha.nome} e onChange={handleChange} nos inputs)
    );
}
==================================================================== */


// ====================================================================
// CÓDIGO ESTÁTICO - PARA TESTAR A ESTÉTICA AGORA
// ====================================================================
export default function EditarFigurinha() {
    // Pega o ID da URL só para mostrar no título como teste
    const params = useParams();
    const idDaFigurinha = params?.id || "1";

    return (
        <main className="cadastro-container">
            <div className="cadastro-header">
                {/* Mudei o ícone da estrela para um lápis para combinar com a edição */}
                <h2><i className="fa-solid fa-pen iconeEstrela"></i> Editar figurinha (ID: {idDaFigurinha})</h2>
            </div>
            
            <div className="cadastro-card">
                <form className="cadastro-form">
                    <div className="form-group">
                        <label>Nome da figurinha <span>*</span></label>
                        {/* Usando defaultValue para simular que o dado já veio do backend */}
                        <input type="text" defaultValue="Twilight Sparkle" required />
                    </div>

                    <div className="form-group">
                        <label>Personagem <span>*</span></label>
                        <select defaultValue="twilight" required>
                            <option value="">Selecione o personagem</option>
                            <option value="twilight">Twilight Sparkle</option>
                            <option value="pinkie">Pinkie Pie</option>
                            <option value="rainbow">Rainbow Dash</option>
                            <option value="fluttershy">Fluttershy</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Coleção <span>*</span></label>
                        <select defaultValue="magia_amizade" required>
                            <option value="">Selecione a coleção</option>
                            <option value="magia_amizade">A Magia da Amizade</option>
                            <option value="aventuras">Aventuras em Equestria</option>
                            <option value="cristais">Reino dos Cristais</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Raridade <span>*</span></label>
                        <select defaultValue="rara" required>
                            <option value="">Selecione a raridade</option>
                            <option value="comum">Comum</option>
                            <option value="rara">Rara</option>
                            <option value="super_rara">Super-rara</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Quantidade <span>*</span></label>
                        <input type="number" defaultValue="2" min="1" required />
                    </div>

                    <div className="form-group">
                        <label>Descrição (opcional)</label>
                        <input type="text" defaultValue="Minha primeira figurinha rara!" />
                    </div>

                    {/* Mudei o texto do botão */}
                    <button type="submit" className="btn-salvar">Salvar alterações</button>
                </form>

                <div className="cadastro-imagem-section">
                    <div className="upload-box">
                        <div className="upload-icon">📷</div>
                        <p className="upload-title">Alterar imagem</p>
                        <p className="upload-subtitle">Clique para selecionar ou arraste o arquivo</p>
                    </div>
                    
                    <div className="pony-illustration">
                        <img src="/img/twilight.png" alt="Twilight Sparkle" />
                    </div>
                </div>
            </div>
        </main>
    );
}