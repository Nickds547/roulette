import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getTheories } from '../../api/roulette.api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateTheories } from '../../redux/thoeries/theories.store';
import { setLoading } from '../../redux/user-account/user-account.store';
import LoaderComponent from '../loader/loader.component';
import TheoriesInput from '../theories-input/theories-input.component'
import './theories-container.component.css'


const TheoriesContainer = () =>{
    
    const theories = useAppSelector((state) => state.theoriesReducer.theories);
    const isLoading = useAppSelector((state) => state.theoriesReducer.loading)
    const dispatch = useAppDispatch();

    useEffect(() =>{
       if(theories.length === 0){
           dispatch(setLoading(true))
             getTheories()
            .then((data) => {return data.json()})
            .then((data) =>{
                dispatch(updateTheories(data))
                dispatch(setLoading(false))
            }).catch((error) =>{
                dispatch(setLoading(false))
            })
       }
    })

    return (
        <>
        In Component
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
        </>
    )
}


export default TheoriesContainer;
