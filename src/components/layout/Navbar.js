import { Link} from 'react-router-dom';

import styles from './Navbar.module.css';

import logo from '../../img/logo_voa.png';

function Navbar( {acao}) {

    var local = (window.location.pathname);
    var l;
    var na = styles.navbar;

    if(local === "/" || local === "/Sobre"|| local === "/Projetos"){
        l = 0
        na = styles.navbar;
    }

    if(local === "/IFantasy"){
        l = 1
        na = styles.navbarIFantasy;
    } 

    if(local === "/IFashion"){
        l = 2
        na = styles.navbarIFashion;
    }

    if(local === "/ExpoArte"){
        l = 3
        na = styles.navbarExpoArte;
    }

    if(local === "/CantoCoral"){
        l = 4
        na = styles.navbarCantoCoral

    }


    function subir (){
        window.scrollTo(0, 0);
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
                    <li onClick={subir}  className={l === 1 ? styles.itemIFantasy : styles.itemH}><Link to="/Projetos">Projetos</Link></li>
                    <li onClick={subir}  className={l === 1 ? styles.itemIFantasy : styles.itemH}><Link to="/IFantasy">IFantasy</Link></li>

                    <li onClick={subir}  className={l === 2 ? styles.itemIFashion : styles.itemH}><Link to="/">Voa</Link></li>
                    <li onClick={subir}  className={l === 2 ? styles.itemIFashion : styles.itemH}><Link to="/Projetos">Projetos</Link></li>
                    <li onClick={subir}  className={l === 2 ? styles.itemIFashion : styles.itemH}><Link to="/IFashion">IFashion</Link></li>


                    <li onClick={subir}  className={l === 3 ? styles.itemExpoArte : styles.itemH}><Link to="/">Voa</Link></li>
                    <li onClick={subir}  className={l === 3 ? styles.itemExpoArte : styles.itemH}><Link to="/Projetos">Projetos</Link></li>
                    <li onClick={subir}  className={l === 3 ? styles.itemExpoArte : styles.itemH}><Link to="/ExpoArte">ExpoArte</Link></li>

                    <li onClick={subir}  className={l === 4 ? styles.itemCantoCoral : styles.itemH}><Link to="/">Voa</Link></li>
                    <li onClick={subir}  className={l === 4 ? styles.itemCantoCoral : styles.itemH}><Link to="/Projetos">Projetos</Link></li>
                    <li onClick={subir}  className={l === 4 ? styles.itemCantoCoral : styles.itemH}><Link to="/CantoCoral">Canto Coral</Link></li>

                </ul>          
            
            </div>
        </nav>
    )

}

export default Navbar