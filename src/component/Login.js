import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';
const Login = () => {

    const [logdata,setlogdata] = React.useState({

        name:'',
        password:''
    });
const nav = useNavigate();

const chklog=()=>{
    axios.post("/user/login",logdata).then((res)=>
    {
       alert(res.data.data) 
      if (res.data.data == "input is wrong") 
      {
          console.log("user not exist")
      }
      else 
      {
          localStorage.setItem("name",logdata.name);
         // localStorage.setItem("id",logdata[0]._id);
        console.log(logdata)
        nav("/dash",{replace:true})
    }
});
}

    return (
        <div >
 

<Header />

<h1>Login</h1>

       
            <input type ="email" name ="txtnm"  placeholder="Username" onChange={(val) =>{setlogdata({...logdata,name:val.target.value})} }/>
            <h1></h1>
            <input type ="password" name ="txtpwd"  placeholder="Password" onChange={(val) =>{setlogdata({...logdata,password:val.target.value})} }/>
            <h1></h1>
            <input type ="button" name ="btnlog" value ="Login" onClick={()=>{chklog()}}/>

        </div>
    )
}

export default Login