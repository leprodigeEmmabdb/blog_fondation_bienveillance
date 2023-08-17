import {Link, Outlet} from 'react-router-dom';
import logo from '../assets/images/logoMain.png'
import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar bg="primary" sticky='top' expand="lg">
                <Container>
                    <div className="nav rounded-circle mx-5">
                        <img src={logo}
                            width={170}
                            alt="logo"/>
                    </div>
                    <Navbar.Toggle aria-controls="navbarNav"/>
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="flex-column flex-sm-row offset-2">
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
                            <Nav.Item>
                                <Container fluid>
                                    <Form className="d-flex" role="search">
                                        <FormControl type="search" placeholder="recherche..." aria-label="Search" className="me-2"/>
                                        <Button variant="outline-light" type="submit">
                                            Recherche
                                        </Button>
                                    </Form>
                                </Container>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/></>
    );
}

export default Header;
