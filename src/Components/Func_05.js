// handling multiple input tag 

import {useState} from "react";
export default function Input(){
    let [name,setName] = useState({fname:"",lname:"",img:"",img_url:""})
    const handleFile = (e)=>{
      setName({...name,[e.target.name]:e.target.files[0]})
      console.log("e.target",e.target);
      console.log("e.target.files",e.target.files);
      console.log("e.target.files[0]",e.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
         console.log("reader.result",reader.result); // Set the image preview URL
         setName({...name,img_url:reader.result})
      };
      console.log("reader.readAsDataURL(file)",reader.readAsDataURL(e.target.files[0]));
    }
    const handleClick = ()=>{
      console.log("clicked");
      console.log("name = ",name);
    }
 return (
    <>
   
    <input className="inpt" onChange={(e)=>setName({...name,fname:e.target.value})} type="text" value = {name.fname} placeholder="Enter first name" /> <br/>
    <input className="inpt" onChange={(e)=>setName({...name,lname:e.target.value})} type="text" value = {name.lname} placeholder="Enter Last Name" /> <br/>
    <input type="file" name="img" value={name.value} onChange={handleFile} multiple />
    <button onClick={handleClick} >click</button>
     <img src={name.img_url} alt="" />
    {/* another way*/}
   
    </>
 )
}

