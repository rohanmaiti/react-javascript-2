import React , {Component} from "react"

class ClassComp03 extends Component{
    constructor(){
        super();
        this.state = {
            message:"Love Babbar",
            sub:"subscribe",
            stage:true,
            name:'Love Babbar'
        }
    }

    doWork=()=>{
        // console.log("hii");
        console.log(this.state);
        this.state.stage ?this.setState({message:"thank you for Subscribing",sub:"unsubscribe",stage:false}):this.setState({message:this.state.name,sub:"subscribe",stage:true})   
        // console.log(this.state.stage)
    }
    render(){
        return(
        <>
        <h1>{this.state.message}</h1>
        <button onClick={this.doWork} >{this.state.sub}</button>
        </>
        )
    }
}
export default ClassComp03;