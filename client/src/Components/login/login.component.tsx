import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ILogin } from "../../redux/user-account/user-account.model";
import LoaderComponent from "../loader/loader.component";
import './login.component.css';

interface loginProps {
    loginSubmitted: (account: ILogin) => void;
    isLoading?: boolean;
}


const LoginComponent = (props: loginProps) => {

    const [formValue, setFormValue] = useState({username: "", password: ""});
    const [showFormValidation, setShowFormValidation] = useState(false);

    const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        setFormValue({
            ...formValue,
            username: event.target?.value || ""
        })
    }

    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        setFormValue({
            ...formValue,
            password: event.target?.value || ""
        })
    }

    const submitForm = () =>{
        setShowFormValidation(true);
        if(formValue.username.length >= 5 && formValue.password.length >= 5){
            props.loginSubmitted(formValue);
        }
    }

    return (
        <>
           {!props.isLoading ?  
           <div className="login-container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username*</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            value={formValue.username}
                            onChange={updateUsername}    
                        />
                        {formValue.username.length < 5 && showFormValidation &&
                            <span className="input-error">
                                Username must be at least 5 characters
                            </span>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password*</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={formValue.password}
                            onChange={updatePassword}    
                        />
                        {formValue.password.length < 5 && showFormValidation &&
                            <span className="input-error">
                                Password not long enough
                            </span>
                        }
                    </Form.Group>
                    <Button
                        id="login-submit" 
                        variant="primary" 
                        onClick={submitForm}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
            :
                <>
                    <LoaderComponent />
                </>
            }
        </>
    )
}

export default LoginComponent;