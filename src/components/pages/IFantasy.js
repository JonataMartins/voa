import styles from './IFantasy.module.css'
import marcio from '../../img/galeriaIFantasy/capa.png'



function IFantasy() {

    return (

        <section className={styles.IFantasy}>

            <h1>Sobre<span>   IF</span>antasy </h1>
            <div>
                <p> A IFantasy é uma atividade pedagógica pontual em formato de um festival a fantasia que acontece uma vez por ano. Tem por objetivo promover a socialização da comunidade interna e estabelecimento de elos com a comunidade externa. Além de fomentar diversos saberes interdisciplinares gera certificação e oportuniza experimentação, trabalho e apresentações de músicos, DJs, fotógrafos, costureiros, maquiadores, dentre outros profissionais pertencentes ao próprio Campus Poços de Caldas. A 1ª edição do evento foi realizada em 2019.
                </p>

                <img src={marcio} alt='' />

            </div>

        </section>

    )

}

export default IFantasy