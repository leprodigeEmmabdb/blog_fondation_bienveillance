import Header from '../components/Header'
import Carousel1 from '../assets/images/carousel1.jpg'
import Carousel2 from '../assets/images/carousel2.jpg'
import Carousel3 from '../assets/images/carousel3.jpg'
import {Carousel} from 'react-bootstrap';
const Index = () => {
    return (
        <div>
            <div className="banner">
                <Carousel interval={2000}>
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
        </div>
    );
}

export default Index;
