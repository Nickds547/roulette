import { Container, Nav, Navbar } from "react-bootstrap";


export const NavbarComponent = () =>{

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto" defaultActiveKey="/">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent;