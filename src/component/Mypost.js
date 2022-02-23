import React from 'react'
import { useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Mypost = () => {
    const abc = localStorage.getItem('name')
    const [pdata,setpdata] = useState([]);
    useEffect(()=>{
        pfetch()
    },[])
    const nav = useNavigate()
    const pfetch = () =>{
        axios.get(`/post/plist/${abc}`).then((res)=>{
            if (res.data.data === "yet you not created any post")
            {
                alert("first create any post")
                nav("/addpost",{replace:true})
            }
            else{
            console.log(res.data.data)
            setpdata(res.data.data)
        }
        })
    }
    
    const delpost =(id)=>{
       // alert("")
        axios.delete(`/post/pdel/${id}`).then((res)=>{
            
            alert(res.data.data)
            console.log(res.data.data)
            pfetch()
        })
    }
    const [showupdate,setshowupdate] = useState(false)
    const upid = "";
    const [updatepost,setupdatepost] = useState({
    //    _id :localStorage.getItem('_id'),
        name:localStorage.getItem('name'),
        title: "",
        message:""
    })
    const updtshow =(id)=>{
        const updtId = `${id}`;
       
        axios.get(`/post/fetchupdt/${id}`).then((res)=>{
            console.log(res.data.data)
            setupdatepost(res.data.data)
             // localStorage.setItem("_id",updatepost._id);
            //  localStorage.setItem("_title",updatepost.title);
            //  localStorage.setItem("message",updatepost.message);
        })
        setshowupdate(true)
    }
    
    const updatedata = (id)=>{
        axios.put(`/post/pupdate/${id}`,updatepost).then((res)=>{
            
            alert(res.data.data)
            console.log(res.data.data)
           // setupdatepost(res.data.data)
           setshowupdate(false)
            pfetch()

        })
    }
    return (
        <div>
            <h1>{abc}'s Posts   </h1> < NavLink to = "/dash" > DashBoard </NavLink>
{   showupdate? 
        <div>
            {/* {
                updatepost.map((item,index)=>(
                    <div key = {index} className='App'> */}
                        <h1></h1>
                        <input type ="text" name ="txttitle"  placeholder="Tittle" value={updatepost.title} onChange={(val) =>{setupdatepost({...updatepost,title:val.target.value})} }/>
                        <h1></h1>
                        <input type ="text" name ="txtmsg"  placeholder="Messaqge" value={updatepost.message} onChange={(val) =>{setupdatepost({...updatepost,message:val.target.value})} }/>
                        <h1></h1>
                        <input type ="button" name ="btnlog" value ="Update" onClick={()=>{updatedata(updatepost._id)}}/>
                    {/* </div>
                ))
            } */
            }
        </div>
            :
            <div>
                
            {
               
                pdata.map((item,index)=>(
                    <div key = {index} className='App' style={{backgroundColor:"blue",color:"white"}}>
                        <h4 ></h4> 
                        <h2 >{item.title}</h2>  
                        <h3 > {item.message}</h3>
                        <h5> 
                            <button onClick={()=>{updtshow(item._id)}} style ={{marginLeft:"80%"}}>Edit</button>
                            <button onClick={()=>{delpost(item._id)}} style ={{marginTop:"0%",float:'right'}}>Delete</button>
                        </h5>
                    </div>
                    ))
        }
         </div>
    }
        </div>
    )
}

export default Mypost
