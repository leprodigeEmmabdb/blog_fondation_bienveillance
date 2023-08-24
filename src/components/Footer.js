import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
const Footer = () => {
    return (
        <div className="col-lg-12 row bg-black text-light col p-4">
            <div className="col-lg-4">
                <h2>Annexes</h2>
                <div className="navbar ">
                    <Nav className="flex-column flex-sm-column">
                        <Nav.Link href="/" className="text-white nav-link active">
                            Accueil
                        </Nav.Link>
                        <Nav.Link href="/article" className="text-white nav-link">
                            Article
                        </Nav.Link>
                        <Nav.Link href="/about" className="text-white nav-link">
                            A propos
                        </Nav.Link>
                        <Nav.Link href="/contact" className="text-white nav-link">
                            Contactez-Nous
                        </Nav.Link>

                    </Nav>
                </div>
            </div>
            <div className="col-lg-4">
                <h2>Adresse</h2>
                <div className="col">
                    <div className="navbar border-start ">
                        <Nav className="flex-column flex-sm-column ">
                            <Nav.Link href="/" className="text-white nav-link active">
                                République Démocratique du Congo
                            </Nav.Link>
                            <Nav.Link href="/article" className="text-white nav-link">
                                No.01 Av. Notre adresse Notre commune, Note Quartier
                            </Nav.Link>
                            <Nav.Link href="/about" className="text-white nav-link">
                                Kinshasa/Limete
                            </Nav.Link>
                        </Nav>

                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <h2>News letters</h2>
                <div className="text-light border-start text-center">
                    S'inscrire sur notre newsletter
                <Nav.Item>
                    <Container fluid>
                        <Form className="d-flex my-4" role="search">
                            <FormControl type="search" placeholder="Entrer votre mail" aria-label="Search" className="me-2"/>
                            <Button variant="outline-primary" type="submit">
                                valider
                            </Button>
                        </Form>
                    </Container>
                </Nav.Item>
                </div>
            </div>
            <div className="col-lg-12 border-top text-center text-secondary d-flex justify-content-center  flex-row">
            Powered by<span className="fw-bolder text-secondary"><a href="" className='nav-link text-seconday px-1'> KongoTek©</a></span>
        </div>
        </div>
    );
}

export default Footer;
