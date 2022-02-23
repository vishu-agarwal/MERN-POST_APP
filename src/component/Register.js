import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
const Register = () => {

    const [regdata,setregdata] = React.useState({
 
        name:"",
        password:""
    })

    const navigate = useNavigate();
    const registerdata=()=>
    {
        axios.post("/user/reg",regdata).then((res)=>{alert(res.data.data)
        if(res.data.data === "successfully registered")
        {
        console.log(regdata)
        navigate("/")
    }else
    {
        console.log("already exist")
    }
});
    }
    return (  
        <div >

<Header />


<h1>Register</h1>

       
            <input type ="email" name ="txtnm"  placeholder="Username" onChange={(val) =>{setregdata({...regdata,name:val.target.value})} }/>
            <h1></h1>
            <input type ="password" name ="txtpwd"  placeholder="Password" onChange={(val) =>{setregdata({...regdata,password:val.target.value})} }/>
            <h1></h1>
            <input type ="button" name ="btnlog" value ="Register" onClick={()=>{registerdata()}}/>

        </div>
    )
}

export default Register