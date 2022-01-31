import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ILogin } from "../../redux/user-account/user-account.model";
import './login.component.css';

interface loginProps {
    loginSubmitted: (account: ILogin) => void;
}


const LoginComponent = (props: loginProps) => {

    const [formValue, setFormValue] = useState({username: "", password: ""});
    const [invalidForm, setInvalid] = useState({username: true, password: true});
    const [showFormValidation, setShowFormValidation] = useState(false);

    const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();

        if(formValue.username.length < 5)
            setInvalid({
                ...invalidForm,
                username: true
            })
        else
            setInvalid({
                ...invalidForm,
                username: false
            })
        setFormValue({
            ...formValue,
            username: event.target?.value || ""
        })
    }

    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        if(formValue.password.length < 5)
            setInvalid({
                ...invalidForm,
                password: true
            })
        else
            setInvalid({
                ...invalidForm,
                password: false
            })

        setFormValue({
            ...formValue,
            password: event.target?.value || ""
        })
    }

    const submitForm = () =>{
        setShowFormValidation(true);
        if(!invalidForm.username && !invalidForm.password){
            props.loginSubmitted(formValue);
        }
    }

    return (
        <>
            <div className="login-container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter email" 
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
                        <Form.Label>Password</Form.Label>
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
                        variant="primary" 
                        onClick={submitForm}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default LoginComponent;