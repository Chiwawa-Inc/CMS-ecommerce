import { Button, NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavItem>
              <Nav.Link href="/">Home</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link eventKey="products">Products</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link eventKey="services">Services</Nav.Link>
            </NavItem>
            <NavItem>
              <Button >Get In Touch</Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;