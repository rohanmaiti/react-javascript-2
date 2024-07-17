// making functional components 01 // these are state less component
//  function Heading(){
//     return (
//         <>
//         <h1>This is a Heading</h1>
//         </>
//     )
// }
// export default Heading;  // as we are using default we can import this function component to any name

// another way of writing a functional component
//  let Heading = () => <>
// <h1>This is a Heading</h1>
// </>
// export default Heading;

// if we dont write deafult keyword then we have to export in differnt way : 
// we have to export like below and while importing we have to use same name as we export here with a {} curly braces
export let Heading = () => <>
<h1>This is a Heading</h1>
</>


