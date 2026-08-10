import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logoIF from '../../img/logo_IF.png'

import styles from './Footer.module.css';

function Footer() {

    return (

        <footer className={styles.footer}>
            <ul>
                <li><Link target="_blank" to={"https://www.facebook.com/laboratoriovoaif"}><FaFacebook /></Link> </li>
                <li><Link target="_blank" to={"https://www.instagram.com/laboratorio.voa/"}><FaInstagram /></Link></li>

            </ul>

            <p className={styles.copy}><span>Voa</span> &copy; 2026 </p>
            <Link target="_blank" to={"https://portal.pcs.ifsuldeminas.edu.br"}><img src={logoIF} alt="Logo do IF" /></Link>
        </footer>
    )

}

export default Footer