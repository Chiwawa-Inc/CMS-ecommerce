import { Button, NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {

  const navLinks = [
    {
      id: "1",
      link: "/",
      component: "Home",
    },
    {
      id: "2",
      link: "/products",
      component: "Products"
    },
    {
      id: "3",
      link: "/services",
      component: "Services"
    },
    {
      id: "4",
      link: "/contact",
      component: <Button as="div">Get In Touch</Button>

    },
  ]
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(link => (
              <NavItem>
              <Link to={link.link}>
                <Nav.Link as="div" eventKey={link.id}>
                  {link.component}
                </Nav.Link>
              </Link>
              </NavItem>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
