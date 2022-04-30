import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getTheories } from '../../api/roulette.api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addTheory, updateLoading, updateTheories } from '../../redux/thoeries/theories.store';
import { ITheory } from '../../redux/thoeries/theories.model'
import LoaderComponent from '../loader/loader.component';
import TheoriesInput from '../theories-input/theories-input.component'
import './theories-container.component.css'


const TheoriesContainer = () =>{
    
    const theories = useAppSelector((state) => state.theoriesReducer.theories);
    const isLoading = useAppSelector((state) => state.theoriesReducer.loading)
    const [hasUpdated, setUpdated] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() =>{
       if(!hasUpdated){
           setUpdated(true);
           dispatch(updateLoading(true))
             getTheories()
            .then((data) => {return data.json()})
            .then((data) =>{
                dispatch(updateTheories(data))
                dispatch(updateLoading(false))
            }).catch((error) =>{
                dispatch(updateLoading(false))
            })
       }
       console.log('updated Theories: ', theories)
    })

    const addNewTheory = (): void =>{
        const newTheory: ITheory = {
            theory: '',
            sortOrder: theories.length + 1
        }
        dispatch(addTheory(newTheory))
    }

    return (
        <div className='theories-container'>
           {!isLoading ? 
                theories.length > 0 ?
                    <Form>
                        {theories.map((theory, index) =>{
                            return(
                                <div key={index}>
                                    <TheoriesInput theory={theory}/>
                                </div>
                            )
                        })}
                    </Form>
                    :
                    <div>No Theories Yet</div>
            :
                <><LoaderComponent /></>
            }
            <div className='theory-button-container'> 
                <Button onClick={() => addNewTheory()} className='add-theory-button'>Add theory</Button>
            </div>
        </div>
    )
}


export default TheoriesContainer;
