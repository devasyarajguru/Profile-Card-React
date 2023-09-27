// import React from "react"
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer';
export default function App()
{
    return (
      <>
        <h1>Dev</h1>
          <div className="app-container">
              <Header /> 
              <Main />
              <Footer />
              </div>
      </>
    )
}