import { Container, Nav, Navbar } from "react-bootstrap";
import { IUser } from "../../redux/user-account/user-account.model";

interface INavBarProps{
    userAccount: IUser
}


export const NavbarComponent = (props: INavBarProps) =>{

    console.log(props.userAccount)

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto" defaultActiveKey="/">
                <Nav.Link>Home</Nav.Link>
                {props.userAccount.role ==='admin' && <Nav.Link href="/admin">Admin</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;