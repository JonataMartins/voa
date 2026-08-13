import styles from './Projetos.module.css';
import { Link } from 'react-router-dom';
//import img from '../../img/imgCard2.jpg';

import arte from '../../img/projetos/logoArte.png';
import expo from '../../img/projetos/logoExpo.png';
import ifantasy from '../../img/projetos/logoIFantasy.png'
import ifashion from '../../img/projetos/logoIFashion.png'
import abacaxi from '../../img/projetos/logoAbacaxi.png'
import make from '../../img/projetos/make.jpg'
import pascoa from '../../img/projetos/pascoa.jpg'
import historia from '../../img/projetos/historia.png'
import jardim from '../../img/projetos/jardim.jpg'
import cine from '../../img/projetos/Cine.webp'
import livros from '../../img/projetos/livros.jpg'
import visita from '../../img/projetos/visita.jpg'
import cantoCoral from '../../img/projetos/cantoCoral.jpg'

function Projetos() {

    function subir() {
        window.scrollTo(0, 0);

    }

    return (

        <section className={styles.Projetos}>
            <h1>Projetos <span>Voa</span></h1>

            <div className={styles.todosCards}>

                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>

                    <div className={styles.imagem1}>

                        <img className={styles.image} src={arte} alt='Logo Arte de Caderno' />
                    </div>

                    <div className={styles.arte}>

                        <h2>Arte de <span>Caderno</span></h2>
                        <p>O Arte de Caderno é um projeto educativo que tem alcance em todo o território nacional. Esse projeto é realizado através de um concurso que tem como objetivo resgatar desenhos belos e curiosos <span>, além de incentivar a preservação das escolas e a consciência de que desenhos devem ser feitos em suportes adequados, não em paredes e carteiras, evitando danos ao patrimônio público, sobrecarga de profissionais da limpeza e gastos financeiros com produtos de limpeza e reparos.</span></p>
                        
                        
                        <Link  target="_blank" to={"https://artedecaderno.ifsuldeminas.edu.br"}><button onClick={subir} className={styles.bArte}>Ver mais</button></Link>

                    </div>

                </div>

                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>

                    <div className={styles.expo}>

                        <h2>ExpoArte</h2>
                        <p>A Galeria Expoarte foi criada em 2018 para suprir a demanda por um espaço multifuncional no IFSULDEMINAS Poços de Caldas para a realização de exposições e outros eventos culturais, devido à grande produção artística no campus em várias linguagens. <span className={styles.ocult}> Essa iniciativa é social e colaborativa, gratuita para visitantes e expositores, buscando oportunizar o acesso à arte e cultura para comunidades menos favorecidas.</span></p>

                        <Link to='/ExpoArte'><button onClick={subir} className={styles.bExpo}>Ver mais</button></Link>

                    </div>

                    <div className={styles.imagemExpo}>

                        <img className={styles.image} src={expo} alt='Logo ExpoArte' />
                    </div>

                </div>

                
                <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>
                    <div className={styles.imagemabacaxi}>
                        <img className={styles.image} src={abacaxi} alt='Logo Abacaxi de Ouro' />
                    </div>
                    <div className={styles.abacaxi}>
                        <h2>ABACAXI DE OURO</h2>
                        <p>
                            O "Abacaxi de Ouro" é um festival de cinema amador escolar e realiza edições anuais. O projeto tem uma abordagem ampla, que busca não apenas premiar produções cinematográficas escolares, mas também oferecer capacitações e formação ao longo do ano letivo. <span className={styles.ocult}> As atividades incluem a produção de cinema amador, moda e figurinos, uso de tecnologias como edição de vídeos, mídias sociais e fotografia, além de vivências na produção de roteiros e experimentações na produção de eventos culturais.</span>
                        </p>

                        <Link target='_blank' to={"https://abacaxideouro.netlify.app"}><button onClick={subir} className={styles.bAbacaxi}>Veja mais</button></Link>

                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>

                    <div className={styles.ifashion}>
                        <h2>IF<span>ashion</span></h2>
                        <p>O Projeto de Extensão Oficina de Moda e Produção de Figurino surgiu em 2014 para atender a demanda de criação de figurinos para produções cinematográficas e teatrais. Oferecendo cursos de corte e costura, além de conhecimentos de História da Moda, fotografia e gestão de eventos, entre outros <span className={styles.ocult}>, o projeto capacita os alunos para exercer diversas funções e futuras profissões. Com parcerias com associações de bairros e órgãos de promoção social, o projeto atende a comunidade interna e externa e cerca de 60 pessoas diretamente.</span></p>
                        <Link to={"/IFashion"}><button onClick={subir} className={styles.bIfashion}>Veja mais</button></Link>

                    </div>
                    <div className={styles.imagemifashion} >
                        <img className={styles.image} src={ifashion} alt='Pessoa' />
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>
                    <div className={styles.imagem1}>
                        <img src={historia} alt='Logo Abacaxi de Ouro' />
                    </div>
                    <div className={styles.historia}>
                        <h2>Curso de História de Arte e Oficina de Pintura</h2>
                        <p>
                            Esse Curso vem a nove anos oferecendo conteúdo de História da Arte e oportunizando a experimentação e aprendizado da pintura através do ensino da técnica junto com a prática.
                            <span className={styles.ocult}>
                                A oficina atende a alunos e servidores da comunidade escolar e demais pessoas da comunidade externa, em sua grande maioria jovens e idosos. Busca contemplar pessoas que residem próximas ao campus, que se localiza na Zona Sul de Poços de Caldas, região onde se concentram bairros com menor desenvolvimento econômico e concentração de renda, consequentemente, mais carentes de oportunidades para aquisição de saberes, habilidades e acesso a arte e cultura.
                            </span>
                        </p>

                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>

                    <div className={styles.cantoCoral}>
                        <h2>Música para todos - Canto Coral </h2>
                        <p>A prática coral é uma forma acessível e inclusiva de vivência musical, utilizando a voz como instrumento principal. Além de promover integração social, disciplina e sensibilidade artística, o canto coletivo contribui para o desenvolvimento cognitivo, emocional e social. Em Poços de Caldas, a formação coral fortalece o acesso à cultura e as ações extensionistas do IFSULDEMINAS – Campus Poços de Caldas, alinhando-se às políticas de democratização cultural e ao compromisso institucional com a comunidade.
                            <span className={styles.ocult}></span>
                        </p>
                        <Link to={"/CantoCoral"}><button onClick={subir} className={styles.bIfashion}>Veja mais</button></Link>

                    </div>
                    <div className={styles.imagemCantoCoral} >
                        <img src={cantoCoral} alt='Pessoa' />
                    </div>
                </div>
 
                <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>
                    <div className={styles.imagem1}>
                        <img src={cine} alt='Logo Abacaxi de Ouro' />
                    </div>
                    <div className={styles.cine}>
                        <h2>Cinema Educativo</h2>
                        <p>
                            Projeto contínuo do Laboratório VOA que utiliza a produção cinematográfica com propósito educativo para abordar temas transversais, iniciado em 2017 com o curta-metragem "Meu Nome é Pablo. Muito Prazer!". O filme aborda a temática do preconceito e bullying, que ainda é vigente em instituições de ensino, incluindo o IFSULDEMINAS campus do Poços de Caldas.
                            <span className={styles.ocult}>
                            </span>
                        </p>

                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>

                    <div className={styles.livros}>
                        <h2>Literatura de Jovens para Jovens</h2>
                        <p>O projeto surgiu em 2019 e tem como objetivo fomentar no público jovem a produção de literatura e o apreço pela leitura através da produção e publicação de contos sobre temáticas pertencentes aos temas transversais e de interesse dos adolescentes, sendo assim, através do fantástico, do terror, do suspense, do romance e outros gêneros de texto
                            <span className={styles.ocult}>
                                , os estudantes experimentam o processo de elaboração de livros, e por meio desses,  vivenciam todas as etapas de produção que vão  muito além da escrita, pois, passam pela ilustração, diagramação,  captação e gestão de recurso, publicação e distribuição, dentre outros.
                            </span>
                        </p>

                    </div>
                    <div className={styles.imagem2} >
                        <img src={livros} alt='Pessoa' />
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>
                    <div className={styles.imagem1}>
                        <img src={visita} alt='garota olhando em um microscópio' />
                    </div>
                    <div className={styles.visita}>
                        <h2>Visitas Didáticas</h2>
                        <p>

                            Visitas didáticas e uma ação educacional que acontece ao longo do ano letivo, tem como objetivo organizar e oferecer visitas guiadas nas dependências do IFSULDEMINAS câmpus Poços de Caldas. Atende escolas públicas da cidade e região e grupos de pessoas interessadas com o intuito não só apresentar a estrutura física da instituição de ensino, mas tudo que ela oferece à comunidade.
                            <span className={styles.ocult}>
                            </span>
                        </p>
                        <Link to={"/Visita"}><button onClick={subir} className={styles.bIfashion}>Veja mais</button></Link>

                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>

                    <div className={styles.jardim}>
                        <h2>Campus Jardim</h2>
                        <p>O Campus Jardim surgiu da necessidade de humanizar o campus de Poços de Caldas do IFSULDEMINAS, que em 2015, construído sobre um aterro encontrava-se completamente desprovido de qualquer vegetação e movimentações para implementar a criação de um paisagismo, que gerasse cobertura e melhor aproveitamento do solo, conforto e acolhimento a comunidade escolar.
                            <span className={styles.ocult}></span>
                        </p>

                    </div>
                    <div className={styles.imagem2} >
                        <img src={jardim} alt='Pessoa' />
                    </div>
                </div>


                <h1>----Projetos Pontuais----</h1>


                <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>
                    <div className={styles.imagemifantasy}>
                        <img className={styles.image} src={ifantasy} alt='Pessoa' />
                    </div>
                    <div className={styles.ifantasy}>
                        <h2>IF<span>antasy</span></h2>
                        <p>A IFantasy é uma atividade pedagógica pontual em formato de um festival a fantasia que acontece uma vez por ano. Tem por objetivo promover a socialização da comunidade interna e estabelecimento de elos com a comunidade externa. Além de fomentar diversos saberes interdisciplinares gera certificação e oportuniza experimentação,<span className={styles.ocult}> trabalho e apresentações de músicos, DJs, fotógrafos, costureiros, maquiadores, dentre outros profissionais pertencentes ao próprio Campus Poços de Caldas</span></p>
                        <Link to={"/IFantasy"}><button onClick={subir} className={styles.bIfantasy}>Veja mais</button></Link>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>

                    <div className={styles.make}>
                        <h2>Criarte</h2>
                        <p>Curso de capacitação em maquiagem artística e social para a profissionalização e inserção de pessoas em situação de vulnerabilidade no mundo do trabalho. <span className={styles.ocult}>
                            O curso surgiu para atender a demanda de profissionais capacitados gerada pela grande produção de espetáculos artísticos no campus e na cidade, bem como, a intenção de fomentar o empreendedorismo autônomo e a geração de renda familiar para aqueles, que por diversos motivos, não conseguem atuar no mercado convencional.
                        </span>
                        </p>

                    </div>
                    <div className={styles.imagemmake} >
                        <img className={styles.image} src={make} alt='Pessoa' />
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className={styles.card}>
                    <div className={styles.imagemifantasy}>
                        <img className={styles.image} src={pascoa} alt='Pessoa' />
                    </div>
                    <div className={styles.Pascoa}>
                        <h2>Caça ao tesouro</h2>
                        <p><span className={styles.ocult}>
                            A Caça ao Tesouro é uma ação pontual que se tornou uma tradição dentro do IFSULDEMINAS câmpus Poços de Caldas, se firmou como uma tradição e passou a fazer parte do calendário escolar, pois vem acontecendo desde 2017 na época da Páscoa. </span> Consiste em uma atividade lúdica/didática transdisciplinar que envolve toda a comunidade escolar que participa da brincadeira produzindo as pistas ou buscando o tesouro pelo espaço físico do campus seguindo mapas, charadas e outros.

                        </p>

                    </div>
                </div>



            </div>

        </section>


    )
}


export default Projetos