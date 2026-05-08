import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const NavbarSection = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>

        <Navbar.Brand href="#home" className="logo-box">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="shadow-none border-0"
        />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto nav-links">

            <Nav.Link href="#home">
              الرئيسية
            </Nav.Link>

            <Nav.Link href="#about">
              من نحن
            </Nav.Link>

            <Nav.Link href="#images">
              الصور
            </Nav.Link>

            <Nav.Link href="#videos">
              الفيديوهات
            </Nav.Link>

            <Nav.Link href="#stats">
             احصائيات
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavbarSection;