import { Container, Nav, Navbar } from "react-bootstrap";


export const NavbarComponent = () =>{

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent;