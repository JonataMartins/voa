import { Link} from 'react-router-dom';

import styles from './Navbar.module.css';

import logo from '../../img/logo_voa.png';

function Navbar( {acao}) {

    var local = (window.location.pathname);
    var l;
    var na = styles.navbar;

    if(local === "/" || local === "/Sobre"|| local === "/Projetos"|| local === "/Abacaxi%20de%20Ouro" || local === "/Arte%20de%20Caderno"){
        l = 0
        na = styles.navbar;
    }

    if(local === "/IFantasy"|| local === "/IFantasyGaleria"){
        l = 1
        na = styles.navbarIFantasy;
    } 

    if(local === "/IFashion"||local === "/IFashionGaleria"){
        l = 2
        na = styles.navbarIFashion;
    }

    if(local === "/ExpoArte"||local === "/ExpoArteGaleria"){
        l = 3
        na = styles.navbarExpoArte;
    }


    function subir (){
        window.scrollTo(0, 0);
        window.location.reload(); 
    }

    
    return (
        <nav >
            
            <div className={acao === true? styles.ativaCor : na}>
                
           
                <li ><Link to="/"><img className={styles.img} src={logo} alt="Voa" /></Link></li>
                
                <ul className={styles.list}>
                    
                    <li onClick={subir} className={l === 0 ? styles.item : styles.itemH}><Link to="/">Home</Link></li>   
                    <li onClick={subir} className={l === 0 ? styles.item : styles.itemH}><Link to="/Projetos">Projetos</Link></li>                   
                    <li onClick={subir} className={l === 0 ? styles.item : styles.itemH}><Link to="/Sobre">Sobre</Link></li>

                    <li onClick={subir}  className={l === 1 ? styles.itemIFantasy : styles.itemH}><Link to="/">Voa</Link></li>
                    <li onClick={subir}  className={l === 1 ? styles.itemIFantasy : styles.itemH}><Link to="/IFantasy">IFantasy</Link></li>
                    <li onClick={subir}  className={l === 1 ? styles.itemIFantasy : styles.itemH}><Link to="/IFantasyGaleria">Galeria</Link></li>

                    <li onClick={subir}  className={l === 2 ? styles.itemIFashion : styles.itemH}><Link to="/">Voa</Link></li>
                    <li onClick={subir}  className={l === 2 ? styles.itemIFashion : styles.itemH}><Link to="/IFashion">IFashion</Link></li>
                    <li onClick={subir}  className={l === 2 ? styles.itemIFashion : styles.itemH}><Link to="/IFashionGaleria">Galeria</Link></li>

                    <li onClick={subir}  className={l === 3 ? styles.itemExpoArte : styles.itemH}><Link to="/">Voa</Link></li>
                    <li onClick={subir}  className={l === 3 ? styles.itemExpoArte : styles.itemH}><Link to="/ExpoArte">ExpoArte</Link></li>
                    <li onClick={subir}  className={l === 3 ? styles.itemExpoArte : styles.itemH}><Link to="/ExpoArteGaleria">Galeria</Link></li>

                </ul>          
            
            </div>
        </nav>
    )

}

export default Navbar