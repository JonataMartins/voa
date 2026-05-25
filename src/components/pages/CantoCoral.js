import React from "react";
import Base from "../layout/Base";

import styles from "./CantoCoral.module.css";
import capa from "../../img/projetos/cantoCoral.jpg";

//import img1 from "../../img/galeriaCantoCoral/cantoCoral.jpg";
// import img2 from '../../img/galeriaCantoCoral/img2.jpeg'
// import img3 from '../../img/galeriaCantoCoral/img3.jpeg'
// import img4 from '../../img/galeriaCantoCoral/img4.jpeg'
// import img5 from '../../img/galeriaCantoCoral/img5.jpeg'
// import img6 from '../../img/galeriaCantoCoral/img6.jpeg'
// import img7 from '../../img/galeriaCantoCoral/img7.jpeg'
// import img8 from '../../img/galeriaCantoCoral/img8.jpeg'
// import img9 from '../../img/galeriaCantoCoral/img9.jpeg'
// import img10 from '../../img/galeriaCantoCoral/img10.jpeg'
// import img11 from '../../img/galeriaCantoCoral/img11.jpeg'
// import img12 from '../../img/galeriaCantoCoral/img12.jpeg'
// import img13 from '../../img/galeriaCantoCoral/img13.jpeg'
// import img14 from '../../img/galeriaCantoCoral/img14.jpeg'
// import img15 from '../../img/galeriaCantoCoral/img15.jpeg'
// import img16 from '../../img/galeriaCantoCoral/img16.jpeg'
// import img17 from '../../img/galeriaCantoCoral/img17.jpeg'
// import img18 from '../../img/galeriaCantoCoral/img18.jpeg'
// import img19 from '../../img/galeriaCantoCoral/img19.jpeg'
// import img20 from '../../img/galeriaCantoCoral/img20.jpeg'
// import img21 from '../../img/galeriaCantoCoral/img21.jpeg'

function CantoCoral() {
  const tituloAside = "Música para todos - Canto Coral";
  const textoAside =
    "A prática coral constitui uma das formas mais democráticas e inclusivas de vivência musical, pois utiliza o instrumento mais acessível ao ser humano: a voz. O canto coletivo promove integração social, desenvolvimento da escuta, disciplina, cooperação e sensibilidade estética. No contexto de Poços de Caldas, que apresenta crescente dinamização cultural, a oferta de formação coral amplia o acesso à prática artística e fortalece as ações extensionistas do IFSULDEMINAS – Campus Poços de Caldas. A proposta dialoga com as políticas públicas de democratização da cultura e com o compromisso institucional de integração entre ensino, cultura e comunidade. Além de seu impacto artístico, estudos apontam que o canto coral favorece aspectos cognitivos, emocionais e sociais, contribuindo para o bem-estar, autoestima e desenvolvimento humano. Assim, o curso justifica-se tanto por sua relevância cultural quanto por seu potencial formativo e social.";
  const imagens = [
    //img1,
    //     img2,
    //     img3,
    //     img4,
    //     img5,
    //     img6,
    //     img7,
    //     img8,
    //     img9,
    //     img10,
    //     img11,
    //     img12,
    //     img13,
    //     img14,
    //     img15,
    //     img16,
    //     img17,
    //     img18,
    //     img19,
    //     img20,
    //     img21
  ];

  return (
    <div className={styles.CantoCoral}>
      <Base
        tituloAside={tituloAside}
        imagemAside={capa}
        textoAside={textoAside}
        imagens={imagens}
      />
    </div>
  );
}

export default CantoCoral;
