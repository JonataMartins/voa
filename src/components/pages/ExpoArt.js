import styles from './ExpoArte.module.css'
import capa from '../../img/galeriaExpoArte/capa.jpg'



function ExpoArte() {

    return (

        <section className={styles.ExpoArte}>

            <h1>Sobre Expo<span>Arte </span></h1>
            <div>
                <p>
                    A Galeria Expoarte foi criada em 2018 para atender a necessidade do IFSULDEMINAS Poços de Caldas de possuir um espaço multifuncional próprio para realização de exposições e outros eventos culturais. Tal espaço se fez necessário devido à demanda gerada pela grande produção artística no campus nas mais diversas linguagens. Suas ações são de cunho social e colaborativo, não possuem fins lucrativos, são gratuitas para os frequentadores e também para os expositores, buscando, dessa forma, oportunizar a comunidades menos favorecidas o acesso arte e cultura e a artistas consagrados, bem como fomentar a inserção de artistas iniciantes no mercado das artes, a formação de público para eventos artísticos e a promoção de uma plataforma para a liberdade de expressão e reflexão sobre diversos temas sociais, econômicos, políticos e culturais de interesse da comunidade escolar. Desde o início de 2022 a galeria passou a contar com uma estrutura diferenciada, desenvolvida para possibilitar maior inclusão a públicos diferentes através da acessibilidade criada com o subsídio de ferramentas tecnológicas, como vídeo guias em Língua Brasileira de Sinais (Libras), textos explicativos e identificadores em braile nos títulos, além de monitores habilitados que acompanham os visitantes, tornando-se assim, uma referência/modelo para criação novos espaços de exibição de arte e adaptação dos já existentes. Caracteriza-se também como um campo para o desenvolvimento de gestores em projetos e experimentação das tecnologias inclusivas produzidas pelos alunos da instituição.
                </p>

                <img src={capa} alt='' />

            </div>

        </section>

    )

}

export default ExpoArte