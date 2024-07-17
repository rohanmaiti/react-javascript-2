import React , {Component} from "react"
class Ques_02 extends Component{
    state = {
        key:0
    }
    increment = ()=>{
        setInterval(()=>{
            this.setState(prevState => {
                return {key:prevState.key+1 }
            });
        },1000)
    }
    render(){
        return(
            <>
            <h1 onClick={this.increment}>{this.state.key}</h1>
            </>
        )
    }
}
export default Ques_02;