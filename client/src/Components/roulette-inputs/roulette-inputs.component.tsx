import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ITheory } from "../../redux/thoeries/theories.model";
import './roulette-inputs.component.css'


interface rouletteInputProps{
    index: number | null,
    theory: string,
}

const RoulettInput = (props: rouletteInputProps) =>{

    const [getTheory, setThoery] = useState({sortOrder: props.index, theory: props.theory})
    return (
        <div className="theory-container">
            <Form.Control 
                className="sortorder-input"
                type="number" 
                value={props.index || ''} 
                placeholder="#"
            />
            <Form.Control 
                as="textarea" 
                placeholder="Enter Theory"
                value={props.theory}    
                className="theory-input"
            />
        </div>
    )
}


interface IRouletteInputsProps{
    theories: ITheory[]
}


const RouletteInputsComponent = (props: IRouletteInputsProps) =>{

    const initialState: JSX.Element[] = []; 
    const [newTheories, setTheoriesArray] = useState(initialState);

    function addTheory(): void{
       setTheoriesArray(newTheories.concat(RoulettInput({index: null, theory: ""})))
    }

    return (
        <>
            {props.theories.map((theory, index) =>{
                return(
                    <div key={index}>
                       { RoulettInput({index: theory.sortOrder, theory: theory.theory})}
                    </div>
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