import React ,{Component} from "react"
class Ques_01 extends Component{
    constructor(props){
        super(props)
        this.state = {
            key:0
        }
    }
    
    increase = ()=>{
        this.setState(prevState=>{
            return {key:prevState.key+1};
        })
    }
    decrease = ()=>{
        this.setState(prevState=>{
            return {key:prevState.key-1};
        } )
    }
    render(){
        return (
            <>
            <h1>{this.state.key}</h1>
            <button onClick={this.increase} >+</button>
            <button onClick={this.decrease}>-</button>
            </>
        )
    }
}
export default Ques_01;