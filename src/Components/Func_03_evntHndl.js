import React from "react";
function Click(){
    function clickHandler(){
        console.log("button clicked");
    }

    
    return(
        <>
        <button onClick={clickHandler} >click</button>
        </>
    )
}
export default Click; 