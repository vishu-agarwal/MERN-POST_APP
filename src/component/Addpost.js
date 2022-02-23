import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Addpost = () => {
let i = 0;
    const [postdata,setpostdata]= React.useState({

        name:localStorage.getItem('name'),

        title: "",
        message:""
    })
   const nav = useNavigate();
    
   
    const postData = () => {
        axios.post("/post/add",postdata).then((res)=>{
            alert(res.data.data);
            console.log(postdata);
            nav("/dash");
        })
    }
    return (
        <div>
            
<h1>Add Post</h1>

       <h3><NavLink to= "/dash">Dashboard</NavLink></h3>
       
<h1></h1>
{/* <input type ="text" name ="txtid" value={++i} onChange={(val) =>{setpostdata({...postdata,id:val.target.value})} }/> */}
<h1></h1>
<input type ="text" name ="txttitle"  placeholder="Tittle" onChange={(val) =>{setpostdata({...postdata,title:val.target.value})} }/>
<h1></h1>
<input type ="text" name ="txtmsg"  placeholder="Messaqge" onChange={(val) =>{setpostdata({...postdata,message:val.target.value})} }/>
<h1></h1>
<input type ="button" name ="btnlog" value ="ADD" onClick={()=>{postData()}}/>

        </div>
    )
}


export default Addpost
