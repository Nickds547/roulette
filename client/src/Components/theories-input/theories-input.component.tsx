import { Form } from "react-bootstrap";
import { ITheory } from "../../redux/thoeries/theories.model";
import './theories-input.component.css'

interface ITheoryInputProp{
    theory: ITheory
}

export const TheoriesInput = (props: ITheoryInputProp) =>{
    return(
        <div className="theory-input-container">
            <Form.Group className="number-input">
                <Form.Label>Number</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group className="text-input">
                <Form.Label>Text</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
        </div>
    )
}

export default TheoriesInput;