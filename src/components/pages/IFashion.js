import React from 'react';
import Base from '../layout/Base';

import styles from './IFashion.module.css'
import capa from '../../img/projetos/logoIFashion.png'

import img1 from '../../img/galeriaIFashion/img1.jpeg'
import img2 from '../../img/galeriaIFashion/img2.jpeg'
import img3 from '../../img/galeriaIFashion/img3.jpeg'
import img4 from '../../img/galeriaIFashion/img4.jpeg'
import img5 from '../../img/galeriaIFashion/img5.jpeg'
import img6 from '../../img/galeriaIFashion/img6.jpeg'
import img7 from '../../img/galeriaIFashion/img7.jpeg'
import img8 from '../../img/galeriaIFashion/img8.jpeg'
import img9 from '../../img/galeriaIFashion/img9.jpeg'
import img10 from '../../img/galeriaIFashion/img10.jpeg'
import img11 from '../../img/galeriaIFashion/img11.jpeg'
import img12 from '../../img/galeriaIFashion/img12.jpeg'
import img13 from '../../img/galeriaIFashion/img13.jpeg'
import img14 from '../../img/galeriaIFashion/img14.jpeg'
import img15 from '../../img/galeriaIFashion/img15.jpeg'
import img16 from '../../img/galeriaIFashion/img16.jpeg'
import img17 from '../../img/galeriaIFashion/img17.jpeg'
import img18 from '../../img/galeriaIFashion/img18.jpeg'
import img19 from '../../img/galeriaIFashion/img19.jpeg'
import img20 from '../../img/galeriaIFashion/img20.jpeg'
import img21 from '../../img/galeriaIFashion/img21.jpeg'

function IFashion() {

     const tituloAside = "Expoarte";
    const textoAside = "O Projeto de Extensão Oficina de Moda e Produção de Figurino surgiu em 2014 devido a necessidade de criação e construção de figurinos para as produções cinematográficas e teatrais desenvolvidas nas aulas de Artes e demais disciplinas, bem como, para atender as demandas de produção de material para o Festival Abacaxi de Ouro de Cinema Amador Escolar promovido pelo IFSULDEMINAS – Poços de Caldas. O projeto atende diretamente proximamente 60 pessoas por meio de cursos oferecidos a comunidade interna e externa, nesse, além da aulas de corte a costura, os alunos se apropriam de conhecimentos de História da Moda, fotografia, produção e gestão de eventos, gestão de recursos financeiros, editorial de moda, dentre outros que capacitam para o exercício de diversas funções e futuras profissões. As vagas para os cursos são oferecidas a pessoas de comunidades carentes através de associações de bairros e órgãos de promoção do bem estar social, como por exemplo a ABACO, que por meio de parceria sede o ateliê de costura e maquinário para realização das aulas práticas (sem essa parceria o curso não seria possível, visto que o Laboratório VOA não possui nem espaço nem equipamentos para tal). Estão contempladas nesse projeto ações de conscientização para um consumo consciente e produção ecologicamente correta, através de processos sustentáveis de tingimentos com substâncias naturais e da reciclagem de materiais para reaproveitamento e customização de peças e acessórios descartados.";
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
        img21
    ];

    return (

        <div className={styles.IFashion}>
        <Base
            tituloAside={tituloAside}
            imagemAside={capa}
            textoAside={textoAside}
            imagens={imagens}
        />
        </div>
    );

    

}

export default IFashion