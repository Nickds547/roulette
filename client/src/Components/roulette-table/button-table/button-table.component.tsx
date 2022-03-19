import './button-table.component.css';
import MainButtons from '../main-buttons/main-buttons'

const ButtonTable = () =>{
   
    return (
        <>
        <div className="button-container">
            <div className="zero-buttons" id="base">
                <div className='left-zero'>
                    <button className='btn roulette-button'>00</button>
                </div>
                <div className='right-zero'>
                    <button className='btn roulette-button'>0</button>
                </div>
            </div>
            <MainButtons />
        </div>
        </>
    )
} 

export default ButtonTable;