import React , {Component} from "react"

class ClassComp05 extends Component{
    state = {
        name:"Rohan"
    }
    change = ()=>{
        //set state is a asyncronus function that why consoling this way in the browser
        this.setState((prevState)=>{return this.state.name==="Rohan"?{name:"Tamanna"}:{name:"Rohan"}},()=>{
            console.log("name is",this.state.name);
        })
        console.log(this.state.name);
    }
    render(){
        return (
            <>
            <h1 onClick={this.change}>{this.state.name}</h1>
            </>
        )
    }
}
export default ClassComp05;