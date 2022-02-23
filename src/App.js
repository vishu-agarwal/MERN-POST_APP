import './App.css';

import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Router from './Router';

function App() {
    return ( 
        <div className='App'>

        <Router />

        <Footer />

        </div >
    );
}

export default App;