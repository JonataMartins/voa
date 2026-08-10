import { Link} from 'react-router-dom';

import styles from './Navbar.module.css';

import logo from '../../img/logo_voa.png';

function Navbar({ acao }) {

    let l = 0;
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

                    <li onClick={subir} className={l === 0 ? styles.item : styles.itemH}>
                        <Link to="/">Home</Link>
                    </li>

                    <li onClick={subir} className={l === 0 ? styles.item : styles.itemH}>
                        <Link to="/Projetos">Projetos</Link>
                    </li>

                    <li onClick={subir} className={l === 0 ? styles.item : styles.itemH}>
                        <Link to="/Sobre">Sobre</Link>
                    </li>


                    {/* <li onClick={subir} className={l === 1 ? styles.itemIFantasy : styles.itemH}>
                        <Link to="/">Voa</Link>
                    </li>

                    <li onClick={subir} className={l === 1 ? styles.itemIFantasy : styles.itemH}>
                        <Link to="/Projetos">Projetos</Link>
                    </li>

                    <li onClick={subir} className={l === 1 ? styles.itemIFantasy : styles.itemH}>
                        <Link to="/IFantasy">IFantasy</Link>
                    </li>


                    <li onClick={subir} className={l === 2 ? styles.itemIFashion : styles.itemH}>
                        <Link to="/">Voa</Link>
                    </li>

                    <li onClick={subir} className={l === 2 ? styles.itemIFashion : styles.itemH}>
                        <Link to="/Projetos">Projetos</Link>
                    </li>

                    <li onClick={subir} className={l === 2 ? styles.itemIFashion : styles.itemH}>
                        <Link to="/IFashion">IFashion</Link>
                    </li>


                    <li onClick={subir} className={l === 3 ? styles.itemExpoArte : styles.itemH}>
                        <Link to="/">Voa</Link>
                    </li>

                    <li onClick={subir} className={l === 3 ? styles.itemExpoArte : styles.itemH}>
                        <Link to="/Projetos">Projetos</Link>
                    </li>

                    <li onClick={subir} className={l === 3 ? styles.itemExpoArte : styles.itemH}>
                        <Link to="/ExpoArte">ExpoArte</Link>
                    </li>


                    <li onClick={subir} className={l === 4 ? styles.itemCantoCoral : styles.itemH}>
                        <Link to="/">Voa</Link>
                    </li>

                    <li onClick={subir} className={l === 4 ? styles.itemCantoCoral : styles.itemH}>
                        <Link to="/Projetos">Projetos</Link>
                    </li>

                    <li onClick={subir} className={l === 4 ? styles.itemCantoCoral : styles.itemH}>
                        <Link to="/CantoCoral">Canto Coral</Link>
                    </li>


                    <li onClick={subir} className={l === 5 ? styles.itemVisita : styles.itemH}>
                        <Link to="/">Voa</Link>
                    </li>

                    <li onClick={subir} className={l === 5 ? styles.itemVisita : styles.itemH}>
                        <Link to="/Projetos">Projetos</Link>
                    </li>

                    <li onClick={subir} className={l === 5 ? styles.itemVisita : styles.itemH}>
                        <Link to="/Visita">Visita</Link>
                    </li> */}


                </ul>

            </div>
        </nav>
    );
}

export default Navbar;