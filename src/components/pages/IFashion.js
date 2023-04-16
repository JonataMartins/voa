import styles from './IFashion.module.css'
import marcio from '../../img/galeriaIFashion/capa.jpg'

function IFashion() {

    return (

        <section className={styles.IFashion}>

            <h1>Sobre<span>   IF</span>ashion </h1>
            <div>
                <p> O Projeto de Extensão Oficina de Moda e Produção de Figurino surgiu em 2014 devido a necessidade de criação e construção de figurinos para as produções cinematográficas e teatrais desenvolvidas nas aulas de Artes e demais disciplinas, bem como, para atender as demandas de produção de material para o Festival Abacaxi de Ouro de Cinema Amador Escolar promovido pelo IFSULDEMINAS – Poços de Caldas.
                    O projeto atende diretamente proximamente 60 pessoas por meio de cursos oferecidos a comunidade interna e externa, nesse, além da aulas de corte a costura, os alunos se apropriam de conhecimentos de História da Moda, fotografia, produção e gestão de eventos, gestão de recursos financeiros, editorial de moda, dentre outros que capacitam para o exercício de diversas funções e futuras profissões. As vagas para os cursos são oferecidas a pessoas de comunidades carentes através de associações de bairros e órgãos de promoção do bem estar social, como por exemplo a ABACO, que por meio de parceria sede o ateliê de costura e maquinário para realização das aulas práticas (sem essa parceria o curso não seria possível, visto que o Laboratório VOA não possui nem espaço nem equipamentos para tal).
                    Estão contempladas nesse projeto ações de conscientização para um consumo consciente e produção ecologicamente correta, através de processos sustentáveis de tingimentos com substâncias naturais e da reciclagem de materiais para reaproveitamento e customização de peças e acessórios descartados.
                </p>

                <img src={marcio} alt='' />

            </div>

        </section>

    )

}

export default IFashion