import { Button, NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

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
      link: "/blogs",
      component: "Blogs"
    },


    {
      id: "5",
      link: "/contact",
      component: <Button as="div">Get In Touch</Button>

    },
  ]
  return (
    <>
    {/* <div style = {{backgroundColor: "#182130"}}> */}
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <span style={{verticalAlign:"middle"}}>Automatica Technologies</span></Navbar.Brand>
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
    </>
  );
}

export default NavBar;
