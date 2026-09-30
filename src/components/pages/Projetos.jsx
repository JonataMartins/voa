import styles from "./Projetos.module.css";
import { Link } from "react-router-dom";
//import img from '../../img/imgCard2.jpg';

import arte from "../../img/projetos/logoArte.png";
import expo from "../../img/projetos/logoExpo.png";
import ifantasy from "../../img/projetos/logoIFantasy.png";
import ifashion from "../../img/projetos/logoIFashion.png";
import abacaxi from "../../img/projetos/logoAbacaxi.png";
import make from "../../img/projetos/make.jpg";
import pascoa from "../../img/projetos/pascoa.jpg";
import historia from "../../img/projetos/historia.png";
import jardim from "../../img/projetos/jardim.jpg";
import cine from "../../img/projetos/Cine.webp";
import livros from "../../img/projetos/livros.jpg";
import visita from "../../img/projetos/visita.jpg";
import cantoCoral from "../../img/projetos/cantoCoral.jpg";
import fundoCard from "../../img/projetos/fundoCard.png";

const projetos = [
  {
    titulo: "Arte de Caderno",
    imagem: arte,
    descricao:
      "O Arte de Caderno é um projeto educativo que tem alcance em todo o território nacional. Esse projeto é realizado através de um concurso que tem como objetivo resgatar desenhos belos e curiosos, além de incentivar a preservação das escolas.",
    link: "https://artedecaderno.ifsuldeminas.edu.br",
    externo: true,
  },
  {
    titulo: "ExpoArte",
    imagem: expo,
    descricao:
      "A Galeria Expoarte foi criada em 2018 para suprir a demanda por um espaço multifuncional no IFSULDEMINAS Poços de Caldas para a realização de exposições e outros eventos culturais.",
    link: "/ExpoArte",
  },
  {
    titulo: "Abacaxi de Ouro",
    imagem: abacaxi,
    descricao:
      "O Abacaxi de Ouro é um festival de cinema amador escolar e realiza edições anuais. O projeto busca não apenas premiar produções cinematográficas escolares, mas também oferecer capacitações e formação ao longo do ano letivo.",
    link: "https://abacaxideouro.netlify.app",
    externo: true,
  },
  {
    titulo: "IFashion",
    imagem: ifashion,
    descricao:
      "O Projeto de Extensão Oficina de Moda e Produção de Figurino surgiu em 2014 para atender a demanda de criação de figurinos para produções cinematográficas e teatrais.",
    link: "/IFashion",
  },
  {
    titulo: "História da Arte e Oficina de Pintura",
    imagem: historia,
    descricao:
      "Esse Curso oferece conteúdo de História da Arte e oportuniza a experimentação e aprendizado da pintura através do ensino da técnica junto com a prática.",
    link: "#",
  },
  {
    titulo: "Música para todos - Canto Coral",
    imagem: cantoCoral,
    descricao:
      "A prática coral é uma forma acessível e inclusiva de vivência musical, utilizando a voz como instrumento principal. Além de promover integração social, disciplina e sensibilidade artística.",
    link: "/CantoCoral",
  },
  {
    titulo: "Cinema Educativo",
    imagem: cine,
    descricao:
      "Projeto contínuo do Laboratório VOA que utiliza a produção cinematográfica com propósito educativo para abordar temas transversais.",
    link: "#",
  },
  {
    titulo: "Literatura de Jovens para Jovens",
    imagem: livros,
    descricao:
      "O projeto surgiu em 2019 e tem como objetivo fomentar no público jovem a produção de literatura e o apreço pela leitura através da produção e publicação de contos.",
    link: "#",
  },
  {
    titulo: "Visitas Didáticas",
    imagem: visita,
    descricao:
      "Visitas didáticas são uma ação educacional que acontece ao longo do ano letivo, com o objetivo de organizar e oferecer visitas guiadas nas dependências do IFSULDEMINAS.",
    link: "/Visita",
  },
  {
    titulo: "Campus Jardim",
    imagem: jardim,
    descricao:
      "O Campus Jardim surgiu da necessidade de humanizar o campus de Poços de Caldas do IFSULDEMINAS, criando paisagismo, cobertura e melhor aproveitamento do solo.",
    link: "#",
  },
];

const projetosPontuais = [
  {
    titulo: "IFantasy",
    imagem: ifantasy,
    descricao:
      "A IFantasy é uma atividade pedagógica pontual em formato de um festival a fantasia que acontece uma vez por ano.",
    link: "/IFantasy",
  },
  {
    titulo: "Criarte",
    imagem: make,
    descricao:
      "Curso de capacitação em maquiagem artística e social para a profissionalização e inserção de pessoas em situação de vulnerabilidade no mundo do trabalho.",
    link: "#",
  },
  {
    titulo: "Caça ao Tesouro",
    imagem: pascoa,
    descricao:
      "A Caça ao Tesouro é uma ação pontual que se tornou uma tradição dentro do IFSULDEMINAS câmpus Poços de Caldas.",
    link: "#",
  },
];


function CardProjeto({ projeto, index }) {
  function subir() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${fundoCard})` }}
    >
      <div className={styles.imagem}>
        <div
          className={`${styles.fita} ${
            index % 2 === 0 ? styles.fitaEsquerda : styles.fitaDireita
          }`}
        ></div>

        <img src={projeto.imagem} alt={projeto.titulo} />
      </div>

      <div className={styles.conteudo}>
        <h2>{projeto.titulo}</h2>

        <p>{projeto.descricao}</p>

        <Link
          className={styles.botao}
          to={projeto.link}
          target={projeto.externo ? "_blank" : undefined}
          rel={projeto.externo ? "noreferrer" : undefined}
          onClick={subir}
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}


function Projetos() {
  return (
    <section className={styles.projetos}>

      <h1>Projetos</h1>

      <div className={styles.cards}>
        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.titulo}
            projeto={projeto}
          />
        ))}
      </div>


      <h1>Projetos Pontuais</h1>

      <div className={styles.cards}>
        {projetosPontuais.map((projeto) => (
          <CardProjeto
            key={projeto.titulo}
            projeto={projeto}
          />
        ))}
      </div>

    </section>
  );
}

export default Projetos;
