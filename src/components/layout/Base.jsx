import React from 'react';
import FsLightbox from 'fslightbox-react';
import styles from './Base.module.css';

function Base({ tituloAside, imagemAside, textoAside, imagens }) {
    const [lightboxController, setLightboxController] = React.useState({ toggler: false, slide: 1 });

    const openLightbox = (slide) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: slide,
            
        });
    };

    return (
        <div className={styles.Base}>
            <aside>
                <h1>{tituloAside}</h1>
                <div className={styles.divisor}>
                <img src={imagemAside} alt={tituloAside} />
                <p>{textoAside}</p>
                </div>
            </aside>

            <article>
            <h1>{"Galeria  " + tituloAside}</h1>
                <div className={styles.galeria}>
                    {imagens.map((imagem, index) => (
                        <img
                            key={index}
                            src={imagem}
                            alt={`Imagem ${index + 1}`}
                            onClick={() => openLightbox(index + 1)} // Abre o lightbox no slide correspondente ao índice + 1
                            className={styles.imagemGaleria}
                        />
                    ))}
                </div>
            </article>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={imagens}
                slide={lightboxController.slide}
                
            />
        </div>
    );
}

export default Base;