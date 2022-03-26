import './main-buttons.css'



const MainButtons = () =>{


    const buttons: Array<number> = [];

    for(var i = 0; i < 12; i++){
        buttons.push(i);
    }

    
    return (
        <div className="main-button-container">
            {buttons.map((value, index) =>{
                    var firsButton = (value + value) + (index + 1);
                    var secondButton = (value + value) + (index + 2);
                    var thirdButton = (value + value) + (index + 3);

                        return(
                            <>
                            { <div className="button-wrapper">
                                <button 
                                    className={`btn roulette-button 
                                        ${firsButton % 2 === 0 ? 'black-button' : 'white-button'}
                                    `}
                                >
                                        {firsButton}
                                </button>
                                <button 
                                    className={`btn roulette-button 
                                        ${secondButton % 2 === 0 ? 'black-button' : 'white-button'}
                                    `}
                                >
                                        {secondButton}
                                </button>
                                <button 
                                    className={`btn roulette-button 
                                        ${thirdButton % 2 === 0 ? 'black-button' : 'white-button'}
                                    `}
                                >
                                        {thirdButton}
                                </button>
                            </div>}
                            </>
                        ) 
                })}
        </div>
    )
}

export default MainButtons;