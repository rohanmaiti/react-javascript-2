//learing porps in Functional Comp & props.children
let Heading = (props) => <>
<h1>Hello {props.name} aged {props.age} </h1>
{props.children} 
</>
export default Heading;