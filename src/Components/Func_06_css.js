import "../CSS/style.css"
const obj = {color:"blue",fontSize:"125px"}
export default function Css(){
    // return (<h1 style={{color:"blue",fontSize:"125px"}} >hello Rohan</h1>)  // inline css 
    // the outer {} is for writing javascript code and the inner {} is for defining a object that defiens the css property for the item 
    // return (<h1 style={obj} >hello Rohan</h1>)

    // 2nd way of styling a component is creating a .css  file and use this file using className attribute
    return (<h1 className="header" >hello Rohan</h1>)
    


}