import React ,{Component} from "react"
import "../CSS/form01.css"
class Form extends Component{
    constructor(...args){
        super(...args)
        this.state = {
            name:"",
            email:"",
            text:"",
            select:"---"
        };
    }
   

   submit = (e)=>{
   e.preventDefault();
   console.log( document.querySelector('#text').value)
   console.log(  document.querySelector('#email').value)
   console.log( document.querySelector('#area').value)
    }
    render(){
        return (
           <form className="form-01" onSubmit={this.submit} >
           <input type="text"    id="text"   placeholder="Enter your name"/> <br/>
            <input type="email"  id="email"  placeholder="Enter email id" />  <br/> 
            <textarea            id="area"   placeholder="Enter your thoughts"></textarea> <br/>
            <div>
            <label for='year'> Select year </label> 
            <select value={this.state.select} onChange={(e)=>{this.setState({select:e.target.value})}} >
            <option  > ----- </option>
            <option value="1st" > 1st </option>
            <option value="2nd" > 2nd </option>
            <option value="3rd" > 3rd </option>
            <option value="4th" > 4th </option>
            </select> 
            </div> 
           
            <br/>
            <button type="submit" >submit</button>
            </form>
        )
    }
}
export default Form;