import React , {Component} from "react"

class ClassComp04 extends Component{
    state = {
        count:0,
    }
    // increment(){  // to write like this syntax we have to write like the 3rd one
    //     this.setState(prevState=>{return {count:prevState.count+1}})
    // }
    increment=()=>{  // to write like this syntax we have to write like line no 20
        this.setState(prevState=>{return {count:prevState.count+1}})
    } 
    render(){   
        return(
            <>
            <h2>count - {this.state.count} </h2>
            {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Inc</button> */}
            {/* <button onClick={()=>{this.setState(prevState=>{return {count:prevState.count+1}})}} >Inc</button> */}
            {/* <button onClick={()=>this.increment()}>Inc</button> */}
            {/* <button onClick={()=>this.increment()}>Inc</button> */}
            </>
        )
    }
}
export default ClassComp04;