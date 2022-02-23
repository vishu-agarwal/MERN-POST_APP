import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Dashboard = () => {

const [dashdata,setdashdata] = React.useState([]);

React.useEffect(()=>{
    fetch()
},[])

const fetch =()=>{
axios.get("/post/list").then((res)=>{
    console.log(res.data.data)
    setdashdata(res.data.data)
})
}
const abc = localStorage.getItem('name')


    return (
        <div>
            <h1>Dashboard</h1>
<Logout/>
            <h1>welcome {abc} !</h1>
             < NavLink to = "/mypost" > MyPost </NavLink>

<br/>
< NavLink to = "/addpost" > AddPost </NavLink>


    {
        dashdata.map((item,index)=>(
            <div key = {index} className='App' style={{backgroundColor:"yellow"}}>

              <h4 >{item.name}</h4> 
                  <h2 >{item.title}</h2> 
                  
                 
                 <h3 > {item.message}</h3>
              
            </div>
        ))
    }
            
      
        </div>

        
    )
}

export default Dashboard
