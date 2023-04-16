import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import styles from './IFashionGaleria.module.css'

//import renata from '../../img/imgCard2.jpg'
import img1 from '../../img/galeriaIFashion/img1.jpeg'
import img2 from '../../img/galeriaIFashion/img2.jpeg'
import img3 from '../../img/galeriaIFashion/img3.jpeg'
import img4 from '../../img/galeriaIFashion/img4.jpeg'
import img5 from '../../img/galeriaIFashion/img5.jpeg'
import img6 from '../../img/galeriaIFashion/img6.jpeg'
import img7 from '../../img/galeriaIFashion/img7.jpeg'
import img8 from '../../img/galeriaIFashion/img8.jpeg'
import img9 from '../../img/galeriaIFashion/img9.jpeg'
import img10 from '../../img/galeriaIFashion/img10.jpeg'
import img11 from '../../img/galeriaIFashion/img11.jpeg'
import img12 from '../../img/galeriaIFashion/img12.jpeg'
import img13 from '../../img/galeriaIFashion/img13.jpeg'
import img14 from '../../img/galeriaIFashion/img14.jpeg'
import img15 from '../../img/galeriaIFashion/img15.jpeg'
import img16 from '../../img/galeriaIFashion/img16.jpeg'
import img17 from '../../img/galeriaIFashion/img17.jpeg'
import img18 from '../../img/galeriaIFashion/img18.jpeg'
import img19 from '../../img/galeriaIFashion/img19.jpeg'
import img20 from '../../img/galeriaIFashion/img20.jpeg'
import img21 from '../../img/galeriaIFashion/img21.jpeg'



function IFashionGaleria() {

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

        <section className={styles.IFashion}>

            <h1>Galeria <span>   IF</span>ashion</h1>

            <div className={styles.galeria}>

            <button onClick={() => openLightboxOnSlide(1)}>
            <img src={img1} alt='IFashion' />
			</button>

			<button onClick={() => openLightboxOnSlide(2)}>
            <img src={img2} alt='IFashion' />
			</button>

            <button onClick={() => openLightboxOnSlide(3)}>
            <img src={img3} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(4)}>
            <img src={img4} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(5)}>
            <img src={img5} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(6)}>
            <img src={img6} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(7)}>
            <img src={img7} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(8)}>
            <img src={img8} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(9)}>
            <img src={img9} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(10)}>
            <img src={img10} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(11)}>
            <img src={img11} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(12)}>
            <img src={img12} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(13)}>
            <img src={img13} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(14)}>
            <img src={img14} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(15)}>
            <img src={img15} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(16)}>
            <img src={img16} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(17)}>
            <img src={img17} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(18)}>
            <img src={img18} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(19)}>
            <img src={img19} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(20)}>
            <img src={img20} alt='IFashion' />
            </button>

            <button onClick={() => openLightboxOnSlide(21)}>
            <img src={img21} alt='IFashion' />
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
                    img21
				]}
				slide={lightboxController.slide}
			/>
                          
                

</div>

            




        </section>

    )

}

export default IFashionGaleria



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