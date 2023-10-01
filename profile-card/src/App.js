// import React from "react"
import Header from './Components/Header.js';
import './App.css';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
export default function App()
{
    return (
      <>
          <h1 className='Heading-card-name'> Profile Card</h1>
          <div className="app-container">
          
              <Header /> 
              <Main />
              <Footer />
              </div>
      </>
    )
}