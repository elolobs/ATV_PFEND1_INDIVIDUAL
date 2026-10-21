
import styles from "./page.module.css";
import Link from "next/link";


export default async function Home() {

  return (
    <>
   <main className={styles.main}>
      <div className={styles.boasVindas}>
        <h1 className={styles.titulo}><i className={`fa-solid fa-star ${styles.iconeEstrela}`}></i> Bem-vindo(a)!</h1>
        <p className={styles.subtitulo}>
          Aqui você pode organizar e gerenciar <br></br>suas figurinhas de My Little Pony.
        </p>
          <img 
            src="/img/manesix.png" 
            alt="As Mane Six" 
            className={styles.imagemManeSix} 
          />
        <Link href="/cadastro" className={styles.botaoCadastrar}>
          + Cadastrar nova figurinha
        </Link>

      
      </div>
    </main>
    </>
  );
}
