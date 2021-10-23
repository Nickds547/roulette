import React from "react";

const ButtonTable = () =>{

    const buttons: Array<number> = [];

    for(var i = 0; i < 37; i++){
        buttons.push(i);
    }
    
    return (
        <>
            {buttons.map((value, index) =>{
                return <button>{value}</button>
            })}
        </>
    )
} 

export default ButtonTable;