import { Link} from 'react-router-dom';

import styles from './Navbar.module.css';

import logo from '../../img/logo_voa.png';

function Navbar({ acao }) {
    let na = styles.navbar;

    function subir() {
        window.scrollTo(0, 0);
    }

    return (
        <nav>
            <div className={acao === true ? styles.ativaCor : na}>

                <li>
                    <Link to="/">
                        <img className={styles.img} src={logo} alt="Voa" />
                    </Link>
                </li>

                <ul className={styles.list}>

                    <li onClick={subir} className={styles.item }>
                        <Link to="/">Home</Link>
                    </li>

                    <li onClick={subir} className={styles.item}>
                        <Link to="/Projetos">Projetos</Link>
                    </li>

                    <li onClick={subir} className={styles.item}>
                        <Link to="/Sobre">Sobre</Link>
                    </li>

                </ul>

            </div>
        </nav>
    );
}

export default Navbar;