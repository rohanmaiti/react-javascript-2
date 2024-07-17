import React , {Component} from "react";
class From_08 extends Component{
    state = {
        name : ""
    }
    handleSubmit = e => {
        alert(`${this.state.name}`);
    }
    changeName = e =>{
        this.setState({name:e.target.value});
    } 
    render(){
        let {name} = this.state;
        return (<>
        <form  onSubmit={this.handleSubmit} >
            <input type="text" value={name} onChange={this.changeName} />  <br/>
            <button type="submit" >Submit</button>
        </form>
        </>)
    }
}

export default From_08