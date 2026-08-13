import styles from './Manutencao.module.css'
import manutencao from '../../img/Manutencao.svg'

function Manutencao() {

    return (
        <section className={styles.manutencao}>
            <h1>Esse Site está em manutenção</h1>
            <img src={manutencao} alt="Manutenção"/>
            
        </section>
    )

}

export default Manutencao;