import "./cadastro.css";
import styles from "./cadastro.css";

export default function Cadastro() {
    return (
        <main className="cadastro-container">
            <div className="cadastro-header">
                <h2><i className="fa-solid fa-star iconeEstrela"></i> Cadastrar figurinha</h2>
            </div>
            
            <div className="cadastro-card">
                <form className="cadastro-form">
                    <div className="form-group">
                        <label>Nome da figurinha <span>*</span></label>
                        <input type="text" placeholder="Ex: Twilight Sparkle" required />
                    </div>

                    <div className="form-group">
                        <label>Personagem <span>*</span></label>
                        <select required>
                            <option value="">Selecione o personagem</option>
                            <option value="twilight">Twilight Sparkle</option>
                            <option value="pinkie">Pinkie Pie</option>
                            <option value="rainbow">Rainbow Dash</option>
                            <option value="fluttershy">Fluttershy</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Coleção <span>*</span></label>
                        <select required>
                            <option value="">Selecione a coleção</option>
                            <option value="magia_amizade">A Magia da Amizade</option>
                            <option value="aventuras">Aventuras em Equestria</option>
                            <option value="cristais">Reino dos Cristais</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Raridade <span>*</span></label>
                        <select required>
                            <option value="">Selecione a raridade</option>
                            <option value="comum">Comum</option>
                            <option value="rara">Rara</option>
                            <option value="super_rara">Super-rara</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Quantidade <span>*</span></label>
                        <input type="number" placeholder="Ex: 1" min="1" required />
                    </div>

                    <div className="form-group">
                        <label>Descrição (opcional)</label>
                        <input type="text" placeholder="Ex: Figurinha com acabamento brilhante..." />
                    </div>

                    <button type="submit" className="btn-salvar">Salvar figurinha</button>
                </form>

                <div className="cadastro-imagem-section">
                    <div className="upload-box">
                        <div className="upload-icon">📷</div>
                        <p className="upload-title">Adicionar imagem</p>
                        <p className="upload-subtitle">Clique para selecionar ou arraste o arquivo</p>
                    </div>
                    
                    <div className="pony-illustration">
                        <img src="/img/pinkie.png" alt="Pinkie Pie" />
                    </div>
                </div>
            </div>
        </main>
    );
}