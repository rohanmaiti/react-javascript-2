import React , {Component} from "react"
class Life_cycle_02 extends Component{
    constructor(props){
    super(props);
    this.state = {
        name : "Rohan"
    }
    console.log("lycycle-02 a constructor");
    } 

    componentDidMount(){
        console.log("Component Did mount-02")
    }
    render(){
        console.log("render-02");
        return (<>
        <h1>Hello RM</h1>
        </>)
    }
}
export default Life_cycle_02;