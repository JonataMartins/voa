import React from 'react';
import Base from '../layout/Base';

import styles from './ExpoArte.module.css'
import capa from '../../img/projetos/logoExpo.png'

import img1 from '../../img/galeriaExpoArte/img1.jpg'
import img2 from '../../img/galeriaExpoArte/img2.jpg'
import img3 from '../../img/galeriaExpoArte/img3.jpg'
import img4 from '../../img/galeriaExpoArte/img4.jpg'
import img5 from '../../img/galeriaExpoArte/img5.jpg'
import img6 from '../../img/galeriaExpoArte/img6.jpg'
import img7 from '../../img/galeriaExpoArte/img7.jpg'
import img8 from '../../img/galeriaExpoArte/img8.jpg'
import img9 from '../../img/galeriaExpoArte/img9.jpg'
import img10 from '../../img/galeriaExpoArte/img10.jpg'
import img11 from '../../img/galeriaExpoArte/img11.jpg'
import img12 from '../../img/galeriaExpoArte/img12.jpg'
import img13 from '../../img/galeriaExpoArte/img13.jpg'
import img14 from '../../img/galeriaExpoArte/img14.jpg'
import img15 from '../../img/galeriaExpoArte/img15.jpg'
import img16 from '../../img/galeriaExpoArte/img16.jpg'
import img17 from '../../img/galeriaExpoArte/img17.jpg'
import img18 from '../../img/galeriaExpoArte/img18.jpg'
import img19 from '../../img/galeriaExpoArte/img19.jpg'
import img20 from '../../img/galeriaExpoArte/img20.jpg'
import img21 from '../../img/galeriaExpoArte/img21.jpg'
import img22 from '../../img/galeriaExpoArte/img22.jpg'
import img23 from '../../img/galeriaExpoArte/img23.jpg'
import img24 from '../../img/galeriaExpoArte/img24.jpg'
import img25 from '../../img/galeriaExpoArte/img25.jpg'
import img26 from '../../img/galeriaExpoArte/img26.jpeg'
import img27 from '../../img/galeriaExpoArte/img27.jpg'

function ExpoArte() {

    const tituloAside = "Expoarte";
    const textoAside = "A Galeria Expoarte foi criada em 2018 para atender a necessidade do IFSULDEMINAS Poços de Caldas de possuir um espaço multifuncional próprio para realização de exposições e outros eventos culturais. Tal espaço se fez necessário devido à demanda gerada pela grande produção artística no campus nas mais diversas linguagens. Suas ações são de cunho social e colaborativo, não possuem fins lucrativos, são gratuitas para os frequentadores e também para os expositores, buscando, dessa forma, oportunizar a comunidades menos favorecidas o acesso arte e cultura e a artistas consagrados, bem como fomentar a inserção de artistas iniciantes no mercado das artes, a formação de público para eventos artísticos e a promoção de uma plataforma para a liberdade de expressão e reflexão sobre diversos temas sociais, econômicos, políticos e culturais de interesse da comunidade escolar. Desde o início de 2022 a galeria passou a contar com uma estrutura diferenciada, desenvolvida para possibilitar maior inclusão a públicos diferentes através da acessibilidade criada com o subsídio de ferramentas tecnológicas, como vídeo guias em Língua Brasileira de Sinais (Libras), textos explicativos e identificadores em braile nos títulos, além de monitores habilitados que acompanham os visitantes, tornando-se assim, uma referência/modelo para criação novos espaços de exibição de arte e adaptação dos já existentes. Caracteriza-se também como um campo para o desenvolvimento de gestores em projetos e experimentação das tecnologias inclusivas produzidas pelos alunos da instituição.";
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

        <div className={styles.ExpoArte}>
        <Base
            tituloAside={tituloAside}
            imagemAside={capa}
            textoAside={textoAside}
            imagens={imagens}
        />
        </div>
    );



}

export default ExpoArte