import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Addpost from './component/Addpost';
import Mypost from './component/Mypost';
import Logout from './component/Logout';
//import Addpost from './component/Addpost';
const Router = () => {
    return ( 
        <div >

        <BrowserRouter >

        {/* <Header /> */}
        <Routes >
       
        <Route path = "/" element = { < Login /> } /> 
        <Route path = "/reg" element = { < Register /> } />
        <Route path = "/dash" element = { < Dashboard /> } />
        <Route path = "/addpost" element = { < Addpost /> } />
        <Route path = "/mypost" element = { < Mypost /> } />

        </Routes>

        </BrowserRouter>
        </div>

    )
}

export default Router;