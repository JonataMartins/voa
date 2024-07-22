import React from 'react';
import Base from '../layout/Base';
import style from './IFantasy.module.css';

import capa from '../../img/projetos/ifantasyLogo.png'

import img1 from '../../img/galeriaIFantasy/Img1.jpg'
import img2 from '../../img/galeriaIFantasy/img2.png'
import img3 from '../../img/galeriaIFantasy/img3.jpg'
import img4 from '../../img/galeriaIFantasy/img4.jpeg'
import img5 from '../../img/galeriaIFantasy/img5.jpeg'
import img6 from '../../img/galeriaIFantasy/img6.jpeg'
import img7 from '../../img/galeriaIFantasy/img7.jpeg'
import img8 from '../../img/galeriaIFantasy/img8.jpeg'
import img9 from '../../img/galeriaIFantasy/img9.jpeg'
import img10 from '../../img/galeriaIFantasy/img10.jpeg'
import img11 from '../../img/galeriaIFantasy/img11.jpeg'
import img12 from '../../img/galeriaIFantasy/img12.jpeg'
import img13 from '../../img/galeriaIFantasy/img13.jpeg'
import img14 from '../../img/galeriaIFantasy/img14.jpeg'
import img15 from '../../img/galeriaIFantasy/img15.jpeg'
import img16 from '../../img/galeriaIFantasy/img16.jpeg'
import img17 from '../../img/galeriaIFantasy/img17.jpeg'
import img18 from '../../img/galeriaIFantasy/img18.jpeg'
import img19 from '../../img/galeriaIFantasy/img19.jpeg'
import img20 from '../../img/galeriaIFantasy/img20.jpeg'
import img21 from '../../img/galeriaIFantasy/img21.jpeg'
import img22 from '../../img/galeriaIFantasy/img22.jpeg'
import img23 from '../../img/galeriaIFantasy/img23.jpeg'
import img24 from '../../img/galeriaIFantasy/img24.jpeg'
import img25 from '../../img/galeriaIFantasy/img25.jpeg'
import img26 from '../../img/galeriaIFantasy/img26.jpeg'
import img27 from '../../img/galeriaIFantasy/img27.jpeg'

function IFantasy() {
  const tituloAside = "IFantasy";
  const textoAside = " A IFantasy é uma atividade pedagógica pontual em formato de um festival a fantasia que acontece uma vez por ano. Tem por objetivo promover a socialização da comunidade interna e estabelecimento de elos com a comunidade externa. Além de fomentar diversos saberes interdisciplinares gera certificação e oportuniza experimentação, trabalho e apresentações de músicos, DJs, fotógrafos, costureiros, maquiadores, dentre outros profissionais pertencentes ao próprio Campus Poços de Caldas. A 1ª edição do evento foi realizada em 2019.";
  const imagens = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27
  ];

  return (
    <div className={style.IFantasy}>
        <Base
      tituloAside={tituloAside}
      imagemAside={capa}
      textoAside={textoAside}
      imagens={imagens}
    />
   </div>
  );
    
}

export default IFantasy;