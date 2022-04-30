import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ITheory } from "../../redux/thoeries/theories.model";
import './theories-input.component.css'

interface ITheoryInputProp{
    theory: ITheory
}

export const TheoriesInput = (props: ITheoryInputProp) =>{

    const [theory, setTheory] = useState(props.theory.theory)
    const [sortOrder, setSortOrder] = useState(props.theory.sortOrder);

    useEffect(() =>{
        if(props.theory.sortOrder !== sortOrder){
            setSortOrder(props.theory.sortOrder);
        }
        if(props.theory.theory !== theory)
            setTheory(props.theory.theory)
    })
    
    return(
        <div className="theory-input-container">
            <Form.Group className="number-input">
                <Form.Label>Number</Form.Label>
                <Form.Control defaultValue={''} value={sortOrder}></Form.Control>
            </Form.Group>
            <Form.Group className="text-input">
                <Form.Label>Text</Form.Label>
                <Form.Control defaultValue={''} value={theory}></Form.Control>
            </Form.Group>
        </div>
    )
}

export default TheoriesInput;