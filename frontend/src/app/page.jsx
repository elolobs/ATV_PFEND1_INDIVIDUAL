import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  await sleep(3500);

  return (
    <>
   <main className={styles.main}>
      <div className={styles.boasVindas}>
        <h1 className={styles.titulo}><i className={`fa-solid fa-star ${styles.iconeEstrela}`}></i> Bem-vindo(a)!</h1>
        <p className={styles.subtitulo}>
          Aqui você pode organizar e gerenciar <br></br>suas figurinhas de My Little Pony.
        </p>
        <Link href="/cadastrar" className={styles.botaoCadastrar}>
          + Cadastrar nova figurinha
        </Link>
      </div>
    </main>
    </>
  );
}
