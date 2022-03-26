import './button-table.component.css';
import MainButtons from '../main-buttons/main-buttons'
import TableRight from '../table-right/table-right';

const ButtonTable = () =>{
   
    return (
        <>
        <div className="button-container">
            <div className="zero-buttons table-left" >
                <div className='left-zero'>
                    <button className='btn roulette-button'></button>
                </div>
                <div className='right-zero'>
                    <button className='btn roulette-button'></button>
                </div>
            </div>
            <MainButtons />
            <TableRight />
        </div>
        </>
    )
} 

export default ButtonTable;