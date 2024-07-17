import React , {Component} from "react";

class ClassComp02 extends Component{
    render(){
        return(
            <>
            <h1>class component {this.props.num}</h1>
            {this.props.children}
            </>
        )
    }
}
export default ClassComp02;