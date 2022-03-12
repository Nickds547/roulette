import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IUser } from "../../redux/user-account/user-account.model";

interface INavBarProps{
    userAccount: IUser,
}


export const NavbarComponent = (props: INavBarProps) =>{
    const location = useLocation().pathname || '';

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link active={location === '/'} as={Link} to="">Home</Nav.Link>
                {props.userAccount.role ==='admin' && <Nav.Link active={location === '/admin'} as={Link} to="/admin">Admin</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;