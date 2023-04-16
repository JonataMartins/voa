import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import styles from './ExpoArteGaleria.module.css'

//import renata from '../../img/imgCard2.jpg'
import img1 from '../../img/galeriaExpoArte/img1.jpg'
import img2 from '../../img/galeriaExpoArte/img2.jpg'
import img3 from '../../img/galeriaExpoArte/img3.jpg'
import img4 from '../../img/galeriaExpoArte/img4.jpg'
import img5 from '../../img/galeriaExpoArte/img5.jpg'
import img6 from '../../img/galeriaExpoArte/img6.jpg'
import img7 from '../../img/galeriaExpoArte/img7.jpg'
import img8 from '../../img/galeriaExpoArte/img8.jpg'
import img9 from '../../img/galeriaExpoArte/img9.jpg'
import img10 from '../../img/galeriaExpoArte/img10.jpg'
import img11 from '../../img/galeriaExpoArte/img11.jpg'
import img12 from '../../img/galeriaExpoArte/img12.jpg'
import img13 from '../../img/galeriaExpoArte/img13.jpg'
import img14 from '../../img/galeriaExpoArte/img14.jpg'
import img15 from '../../img/galeriaExpoArte/img15.jpg'
import img16 from '../../img/galeriaExpoArte/img16.jpg'
import img17 from '../../img/galeriaExpoArte/img17.jpg'
import img18 from '../../img/galeriaExpoArte/img18.jpg'
import img19 from '../../img/galeriaExpoArte/img19.jpg'
import img20 from '../../img/galeriaExpoArte/img20.jpg'
import img21 from '../../img/galeriaExpoArte/img21.jpg'
import img22 from '../../img/galeriaExpoArte/img22.jpg'
import img23 from '../../img/galeriaExpoArte/img23.jpg'
import img24 from '../../img/galeriaExpoArte/img24.jpg'
import img25 from '../../img/galeriaExpoArte/img25.jpg'
import img26 from '../../img/galeriaExpoArte/img26.jpeg'


function ExpoArteGaleria() {



    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (

        <section className={styles.ExpoArte}>

            <h1>Sobre Expo<span>Arte </span></h1>

            <div className={styles.galeria}>

                <button onClick={() => openLightboxOnSlide(1)}>
                    <img src={img1} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(2)}>
                    <img src={img2} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(3)}>
                    <img src={img3} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(4)}>
                    <img src={img4} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(5)}>
                    <img src={img5} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(6)}>
                    <img src={img6} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(7)}>
                    <img src={img7} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(8)}>
                    <img src={img8} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(9)}>
                    <img src={img9} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(10)}>
                    <img src={img10} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(11)}>
                    <img src={img11} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(12)}>
                    <img src={img12} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(13)}>
                    <img src={img13} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(14)}>
                    <img src={img14} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(15)}>
                    <img src={img15} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(16)}>
                    <img src={img16} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(17)}>
                    <img src={img17} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(18)}>
                    <img src={img18} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(19)}>
                    <img src={img19} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(20)}>
                    <img src={img20} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(21)}>
                    <img src={img21} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(22)}>
                    <img src={img22} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(23)}>
                    <img src={img23} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(24)}>
                    <img src={img24} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(25)}>
                    <img src={img25} alt='ExpoArte' />
                </button>

                <button onClick={() => openLightboxOnSlide(26)}>
                    <img src={img26} alt='ExpoArte' />
                </button>

                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={[
                        img1,
                        img2,
                        img3,
                        img4,
                        img5,
                        img6,
                        img7,
                        img8,
                        img9,
                        img10,
                        img11,
                        img12,
                        img13,
                        img14,
                        img15,
                        img16,
                        img17,
                        img18,
                        img19,
                        img20,
                        img21,
                        img22,
                        img23,
                        img24,
                        img25,
                        img26
                    ]}
                    slide={lightboxController.slide}
                />



            </div>






        </section>

    )

}

export default ExpoArteGaleria



/*img1,
                    img2,
                    img3,
                    img4,
                    img5,
                    img6,
                    img7,
                    img8,
                    img9,
                    img10,
                    img11,
                    img12,
                    img13,
                    img14,
                    img15,
                    img16,
                    img17
                    
                    
                    
                    
                    
                    <button onClick={() => setToggler(!toggler)}> <img src={img1} alt='IFantasy' /></button>
                <button onClick={() => setToggler(!toggler)}>  <img src={img2} alt='IFantasy' /> </button>
                <img src={img3} alt='IFantasy' />
                <img src={img4} alt='IFantasy' />
                <img src={img5} alt='IFantasy' />
                <img src={img6} alt='IFantasy' />
                <img src={img7} alt='IFantasy' />
                <img src={img8} alt='IFantasy' />
                <img src={img9} alt='IFantasy' />
                <img src={img10} alt='IFantasy' />
                <img src={img11} alt='IFantasy' />
                <img src={img12} alt='IFantasy' />
                <img src={img13} alt='IFantasy' />
                <img src={img14} alt='IFantasy' />
                <img src={img15} alt='IFantasy' />
                <img src={img16} alt='IFantasy' />
                <img src={img17} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />
                <img src={renata} alt='IFantasy' />



 
             <FsLightbox
                toggler={toggler}
                sources={[
                    img1,
                    img2,
                    img3,
                    img4,
                    img5,
                    img6,
                    img7,
                    img8,
                    img9,
                    img10,
                    img11,
                    img12,
                    img13,
                    img14,
                    img15,
                    img16,
                    img17
                    
                ]}
            />
                    
                    */