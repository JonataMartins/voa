import{FaFacebook, FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logoIF from '../../img/logo_IF.png'

import styles from './Footer.module.css';

var local = (window.location.pathname);
var na = styles.footer;

if(local === "/" ){
    na = styles.footer;
}

if(local === "/sobre" ){
    na = styles.footer;
}

if(local === "/projetos"){
    na = styles.footer;

}

if(local === "/IFantasy"){
    na = styles.footerIFantasy;
}

if(local === "/IFantasyGaleria"){
    na = styles.footerIFantasy;
}   


function Footer(){   

    return(

        <footer className={na}>
            <ul>
                <li><Link target="_blank" to={"https://www.facebook.com/laboratoriovoaif"}><FaFacebook /></Link> </li>
                <li><Link target="_blank" to={"https://www.instagram.com/laboratorio.voa/"}><FaInstagram /></Link></li>

            </ul>

            <p className={styles.copy}><span>Voa</span> &copy; 2023 </p>
            <Link target="_blank" to={"https://portal.pcs.ifsuldeminas.edu.br"}><img src={logoIF} alt="Logo do IF"/></Link>
        </footer>
    )

}

export default Footer