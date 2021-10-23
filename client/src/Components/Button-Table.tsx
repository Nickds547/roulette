import React from "react";
import '../styles/Button-Table.css';

const ButtonTable = () =>{

    const buttons: Array<number> = [];

    for(var i = 0; i < 12; i++){
        buttons.push(i);
    }

   
    return (
        <>
        <div className="container-wrapper">
            {buttons.map((value, index) =>{
                var firsButton = (value + value) + (index + 1);
                var secondButton = (value + value) + (index + 2);
                var thirdButton = (value + value) + (index + 3);

                    return(
                        <>
                        { <div className="button-wrapper">
                            <button 
                                className={`btn roulette-button ${firsButton % 2 === 0 ? 'white-button' : 'black-button'}`}
                            >
                                    {firsButton}
                            </button>
                            <button 
                                className={`btn roulette-button ${secondButton % 2 === 0 ? 'white-button' : 'black-button'}`}
                            >
                                    {secondButton}
                            </button>
                            <button 
                                className={`btn roulette-button ${thirdButton % 2 === 0 ? 'white-button' : 'black-button'}`}
                            >
                                    {thirdButton}
                            </button>
                        </div>}
                        </>
                    ) 
            })}
            {/* <div className="button-wrapper">
                <button>1</button>
                <button>2</button>  
                <button>3</button>  
            </div>
            <div className="button-wrapper">
                <button>4</button>  
                <button>5</button>  
                <button>6</button>    
            </div> */}
        </div>
        </>
    )
} 

export default ButtonTable;