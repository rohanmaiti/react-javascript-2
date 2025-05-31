// learn to handle image and files 

// for single image 
import React from "react"
import {useState} from "react"

export default function Form_Image(){
    console.log()
    const [data,setData] = useState({name:"",image:"",images:""});
    const [link,setLink] = useState([]);

    const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("on submit e.target = ",e.target);
    console.log(data);
    }
    const handleChange = (e)=>{
    console.log("in handle change e.target = ",e.target);
    setData({...data,[e.target.name]:e.target.value})
    console.log("data = ",data);
    }

    const handleFileChange = (e)=>{
    // console.log("e.target = ",e.target);
    // console.log("e.target.value = ",e.target.value);
    // console.log("e.target.file = " , e.target.file);
    // console.log("e.target.files = ",e.target.files);
    setData({...data,[e.target.name]:e.target.files});
    let arr = [];
    for(let i=0;i<e.target.files.length;i++){
    let file = e.target.files[i];
    let src = URL.createObjectURL(file);
    arr.push(src);
    }
    setLink(arr);
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={data.name} onChange={handleChange} />
                <label>choose one</label>
                <input type="file" name="image" onChange={handleFileChange} />
                <input type="file" name="images" onChange={handleFileChange} multiple/>
                {
                   data.images != null ? (
                    link.map(src=>{
                        return <img width="90px" src={src} alt="" key={src} />
                    })
                   ) : <></>
                }
                <button type="submit">submit</button>
            </form>
        </div>
    )
}