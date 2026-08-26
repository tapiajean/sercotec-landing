import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow">
      <Container className="d-flex justify-content-between align-items-center">
        
        {/* Logo ajustado para que no se desborde en celulares */}
        <Navbar.Brand href="#inicio" className="d-flex align-items-center">
          <img 
            src="/sercotec.img/images2.jpg" 
            alt="Logo Sercotec" 
            style={{ height: '30px', width: 'auto', maxHeight: '30px' }} 
            className="rounded"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;


