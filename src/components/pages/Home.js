import styles from './Home.module.css'
import voa from '../../img/logo_voa.png'

function Home() {
    return (

        <selection className={styles.title}>
            <h1>Bem-Vindo ao <span>Voa</span></h1>
            <p>Laboratório de Criatividade</p>
            <img src={voa} alt="Voa" />

        </selection>

    )
}


export default Home