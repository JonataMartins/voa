import styles from "./Home.module.css";
import voa from "../../img/logo_voa.png";

function Home() {
  return (
    <section className={styles.title}>
      <h1>
        Bem-Vindo ao <span>Voa</span>
      </h1>
      <p>Laboratório de Criatividade</p>
      <div className={styles.logo}>
        <img src={voa} alt="Voa" />
      </div>
    </section>
  );
}

export default Home;
