import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ITheory } from "../../redux/thoeries/theories.model";
import './roulette-inputs.component.css'


interface rouletteInputProps{
    index: number | null,
    theory: string,
}

const rouletteInput = (props: rouletteInputProps) =>(
    <div className="theory-container">
            <Form.Label className="number-label">Number</Form.Label>
            <Form.Control 
                className="sortorder-input"
                type="number" 
                value={props.index || ''} 
            />
            <Form.Control 
                as="textarea" 
                placeholder="Enter Theory"
                value={props.theory}    
                className="theory-input"
            />
    </div>
);


interface IRouletteInputsProps{
    theories: ITheory[]
}


const RouletteInputsComponent = (props: IRouletteInputsProps) =>{

    const initialState: JSX.Element[] = []; 
    const [newTheories, setTheoriesArray] = useState(initialState);

    function addTheory(): void{
       setTheoriesArray(newTheories.concat(rouletteInput({index: null, theory: ""})))
    }

    return (
        <>
            {props.theories.map((theory) =>{
                return(
                    rouletteInput({index: theory.sortOrder, theory: theory.theory})
                )
            })}

            {newTheories.map((newTheoryInput) =>{
               return (newTheoryInput)
            })}
            <Button onClick={addTheory}>Add Theory</Button>
        </>
    )
}


export default RouletteInputsComponent;