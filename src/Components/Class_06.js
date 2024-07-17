import React,{Component} from "react"
import styles from "../CSS/class06.module.css"
class ClassComp06 extends Component{
    state ={
        value:0
    }
    stop=()=>{
    console.log("stop");
    clearInterval(this.stopVaribale);
    }
    start =()=>{
         this.stopVaribale = setInterval(()=>{
             this.setState((prevStae)=>{return {value:prevStae.value+1}})
        },1000)
        console.log(this);
    }
  render(){
    return (<>
    
        <h1 className={styles.primary} onClick={this.start}>
            {this.state.value}
        </h1>
        <button onClick={this.stop}>stop</button>
        
    </>)
  }
}
export default ClassComp06;