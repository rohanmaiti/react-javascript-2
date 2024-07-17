import React , {Component} from "react"
import Life_cycle_02 from "./lifrCycle_02";
class Life_cycle_01 extends Component{
    constructor(props){
    super(props);
    this.state = {
        name : "Rohan"
    }
    console.log("lycycle-01 a constructor");
    } 

    componentDidMount(){
        console.log("Component Did mount-01")
    }
    render(){
        console.log("render-01");
        return (<>
        <h1>Hello RM</h1>
        <Life_cycle_02/>
        </>)
    }
}
export default Life_cycle_01;