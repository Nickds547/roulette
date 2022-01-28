import { Form } from "react-bootstrap";


const LoginComponent = () =>{
    return (
        <>
            <div className="login-container">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
            />
            </div>
        </>
    )
}

export default LoginComponent;