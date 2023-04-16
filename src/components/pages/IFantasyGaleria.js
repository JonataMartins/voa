import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import styles from './IFantasyGaleria.module.css'

//import renata from '../../img/imgCard2.jpg'
import img1 from '../../img/galeriaIFantasy/Img1.jpg'
import img2 from '../../img/galeriaIFantasy/img2.png'
import img3 from '../../img/galeriaIFantasy/img3.jpg'
import img4 from '../../img/galeriaIFantasy/img4.jpeg'
import img5 from '../../img/galeriaIFantasy/img5.jpeg'
import img6 from '../../img/galeriaIFantasy/img6.jpeg'
import img7 from '../../img/galeriaIFantasy/img7.jpeg'
import img8 from '../../img/galeriaIFantasy/img8.jpeg'
import img9 from '../../img/galeriaIFantasy/img9.jpeg'
import img10 from '../../img/galeriaIFantasy/img10.jpeg'
import img11 from '../../img/galeriaIFantasy/img11.jpeg'
import img12 from '../../img/galeriaIFantasy/img12.jpeg'
import img13 from '../../img/galeriaIFantasy/img13.jpeg'
import img14 from '../../img/galeriaIFantasy/img14.jpeg'
import img15 from '../../img/galeriaIFantasy/img15.jpeg'
import img16 from '../../img/galeriaIFantasy/img16.jpeg'
import img17 from '../../img/galeriaIFantasy/img17.jpeg'
import img18 from '../../img/galeriaIFantasy/img18.jpeg'
import img19 from '../../img/galeriaIFantasy/img19.jpeg'
import img20 from '../../img/galeriaIFantasy/img20.jpeg'
import img21 from '../../img/galeriaIFantasy/img21.jpeg'
import img22 from '../../img/galeriaIFantasy/img22.jpeg'
import img23 from '../../img/galeriaIFantasy/img23.jpeg'
import img24 from '../../img/galeriaIFantasy/img24.jpeg'
import img25 from '../../img/galeriaIFantasy/img25.jpeg'
import img26 from '../../img/galeriaIFantasy/img26.jpeg'


function IFantasyGaleria() {

    

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

        <section className={styles.IFantasy}>

            <h1>Galeria <span>   IF</span>antasy</h1>

            <div className={styles.galeria}>

            <button onClick={() => openLightboxOnSlide(1)}>
            <img src={img1} alt='IFantasy' />
			</button>

			<button onClick={() => openLightboxOnSlide(2)}>
            <img src={img2} alt='IFantasy' />
			</button>

            <button onClick={() => openLightboxOnSlide(3)}>
            <img src={img3} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(4)}>
            <img src={img4} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(5)}>
            <img src={img5} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(6)}>
            <img src={img6} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(7)}>
            <img src={img7} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(8)}>
            <img src={img8} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(9)}>
            <img src={img9} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(10)}>
            <img src={img10} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(11)}>
            <img src={img11} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(12)}>
            <img src={img12} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(13)}>
            <img src={img13} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(14)}>
            <img src={img14} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(15)}>
            <img src={img15} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(16)}>
            <img src={img16} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(17)}>
            <img src={img17} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(18)}>
            <img src={img18} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(19)}>
            <img src={img19} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(20)}>
            <img src={img20} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(21)}>
            <img src={img21} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(22)}>
            <img src={img22} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(23)}>
            <img src={img23} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(24)}>
            <img src={img24} alt='IFantasy' /> 
            </button>

            <button onClick={() => openLightboxOnSlide(25)}>
            <img src={img25} alt='IFantasy' />
            </button>

            <button onClick={() => openLightboxOnSlide(26)}>
            <img src={img26} alt='IFantasy' />
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

export default IFantasyGaleria



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