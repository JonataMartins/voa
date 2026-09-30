import styles from "./Home.module.css";
import voa from "../../img/logo_voa.png";
import aviao from "../../img/home/aviao.png";
import back2 from "../../img/home/back2.png";
import back3 from "../../img/home/back3.png";
import back4 from "../../img/home/back4.png";
import giz from "../../img/home/giz.png";
import livro from "../../img/home/livro.png";
import logo from "../../img/home/logo.png";
import logo2 from "../../img/home/logo2.png";
import mao from "../../img/home/mao.png";
import montanha1 from "../../img/home/montanha1.png";
import montanha2 from "../../img/home/montanha2.png";
import montanha3 from "../../img/home/montanha3.png";
import nuvem1 from "../../img/home/nuvem1.png";
import nuvem2 from "../../img/home/nuvem2.png";
import nuvem3 from "../../img/home/nuvem3.png";
import porta from "../../img/home/porta.png";
import sol from "../../img/home/sol.png";

function Home() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
    e.currentTarget.style.setProperty("--radius", `120px`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--radius", `0px`);
  };

  const handleParallax = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    const x = (mouseX - centerX) / centerX;

    e.currentTarget.style.setProperty("--mouse-x", x);
  };

  const handleParallaxLeave = (e) => {
    e.currentTarget.style.setProperty("--mouse-x", 0);
  };

  return (
    <section
      className={styles.title}
      onMouseMove={handleParallax}
      onMouseLeave={handleParallaxLeave}
    >
      <div className={styles.logo}>
        <h1>
          Bem vindo ao <span>VOA</span>
        </h1>

        <img className={styles.aviao} src={aviao} alt="Voa" />
        <img className={styles.back2} src={back2} alt="Voa" />
        <img className={styles.back3} src={back3} alt="Voa" />
        <img className={styles.back4} src={back4} alt="Voa" />
        <img className={styles.giz} src={giz} alt="Voa" />
        <img className={styles.livro} src={livro} alt="Voa" />

        <div
          className={styles.logoReveal}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.logo1} src={logo} alt="Voa" />
          <img className={styles.logo2} src={logo2} alt="Voa" />
        </div>

        <img className={styles.mao} src={mao} alt="Voa" />
        <img className={styles.montanha1} src={montanha1} alt="Voa" />
        <img className={styles.montanha2} src={montanha2} alt="Voa" />
        <img className={styles.montanha3} src={montanha3} alt="Voa" />
        <img className={styles.nuvem1} src={nuvem1} alt="Voa" />
        <img className={styles.nuvem2} src={nuvem2} alt="Voa" />
        <img className={styles.nuvem3} src={nuvem3} alt="Voa" />
        <img className={styles.porta} src={porta} alt="Voa" />
        <img className={styles.sol} src={sol} alt="Voa" />
      </div>
    </section>
  );
}

export default Home;
