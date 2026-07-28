import React from 'react';
import Base from '../layout/Base';

import styles from './Visita.module.css'
import capa from '../../img/logo_Visitante.png'

import img1 from '../../img/galeriaVisita/img1.jpeg'
import img2 from '../../img/galeriaVisita/img2.jpeg'
import img3 from '../../img/galeriaVisita/img3.jpeg'
import img4 from '../../img/galeriaVisita/img4.jpeg'
import img5 from '../../img/galeriaVisita/img5.jpeg'
import img6 from '../../img/galeriaVisita/img6.jpeg'
import img7 from '../../img/galeriaVisita/img7.jpeg'
import img8 from '../../img/galeriaVisita/img8.jpeg'
import img9 from '../../img/galeriaVisita/img9.jpeg'
import img10 from '../../img/galeriaVisita/img10.jpeg'
import img11 from '../../img/galeriaVisita/img11.jpeg'
import img12 from '../../img/galeriaVisita/img12.jpeg'
import img13 from '../../img/galeriaVisita/img13.jpeg'
import img14 from '../../img/galeriaVisita/img14.jpeg'
import img15 from '../../img/galeriaVisita/img15.jpeg'
import img16 from '../../img/galeriaVisita/img16.jpeg'
import img17 from '../../img/galeriaVisita/img17.jpeg'

function Visita() {

    const tituloAside = "Visita didática";
    const textoAside = "Visitas Didáticas é uma ação educacional realizada ao longo do ano letivo que promove visitas guiadas ao IFSULDEMINAS – Campus Poços de Caldas. O projeto recebe escolas, grupos e demais interessados para apresentar a estrutura da instituição, seus cursos, laboratórios e oportunidades oferecidas à comunidade. Durante as visitas são realizadas vivências, experimentações, palestras, minicursos, exposições e atividades culturais. Organizadas por estudantes com apoio de servidores, as visitas fortalecem o protagonismo estudantil, aproximam a comunidade da instituição e ampliam a visibilidade e o impacto social do campus.";
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
        img17
    ];

    return (

        <div className={styles.Visita}>
        <Base
            tituloAside={tituloAside}
            imagemAside={capa}
            textoAside={textoAside}
            imagens={imagens}
        />
        </div>
    );



}

export default Visita