// import React from "react"
import Header from './Components/Header.jsx';
import './App.css';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';
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