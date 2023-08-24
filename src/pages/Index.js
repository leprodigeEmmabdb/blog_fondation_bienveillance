import Carousel1 from '../assets/images/carousel1.jpg'
import Carousel2 from '../assets/images/carousel2.jpg'
import Carousel3 from '../assets/images/carousel3.jpg'
import {Carousel} from 'react-bootstrap';
import Square from '../components/Square';


const Index = () => {
    return (
        <div>
            <div className="banner">
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <img className="d-block w-100 image-blur "
                            style={
                                {
                                    objectFit: 'cover',
                                    maxHeight: '500px'
                                }
                            }
                            src={Carousel2}
                            alt="Second slide"/>
                        <Carousel.Caption>
                            <div className="mx-auto mb-5 py-5  ">
                                <h3>Comprendre pour Aider!</h3>
                                <p>"La charité ne consiste pas seulement à donner, mais aussi à comprendre. C'est la capacité de se mettre à la place de quelqu'un d'autre, de ressentir sa douleur et de lui offrir un soutien désintéressé. C'est un acte de compassion qui transcende les différences et nous rappelle notre humanité commune."</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 image-blur "
                            style={
                                {
                                    objectFit: 'cover',
                                    maxHeight: '500px'
                                }
                            }
                            src={Carousel1}
                            alt="Second slide"/>
                        <Carousel.Caption>
                            <div className="mx-auto mb-5 py-5  ">
                                <h3>L'Abondance du Partage!</h3>
                                <p>"Lorsque nous partageons ce que nous avons, nous découvrons la véritable abondance. La charité nous rappelle que la richesse ne réside pas seulement dans la quantité de biens matériels que nous possédons, mais dans notre capacité à donner et à partager avec les autres."</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 image-blur"
                            style={
                                {
                                    objectFit: 'cover',
                                    maxHeight: '500px'
                                }
                            }
                            src={Carousel3}
                            alt="Third slide"/>
                        <Carousel.Caption>
                            <div className="mx-auto mb-5 py-5  ">
                                <h3>Unissez-vous à nous pour un impact positif durable!</h3>
                                <p>"Ensemble, nous faisons la différence : Rejoignez notre association caritative et laissez votre empreinte dans le monde."</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="container">
                <div className='h3 mb-4 text-center d-flex flex-column justify-content-center align-items-center text-secondary py-3 mt-3'>
                    Pourquoi Bienveillance?
                    <div class="soulignement-animation"></div>
                </div>
                <div className='mx-4 container row '>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima veniam rerum hic, eveniet porro cupiditate cum corrupti repudiandae sit culpa molestiae nobis consequuntur magni, quia doloremque quaerat excepturi ab! Doloremque.</p>
                        <Square content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil et accusantium tempore voluptatum temporibus praesentium ipsum fuga" style="col-lg-4" id="img1"
                            url={Carousel2}/>
                        <Square content="Deleniti assumenda ullam! Corrupti nulla eum nemo obcaecati blanditiis quibusdam inventore, explicabo omnis." style="col-lg-4" id="img2"
                            url={Carousel1}/>
                        <Square content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, illo dignissimos. Consequuntur?" style="col-lg-4" id="img3"
                            url={Carousel3}/>
                            
                </div>
            </div>
        </div>
    );
}

export default Index;
