import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [text, setText] = useState("dark")
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    
    setAlert({
      msg:message, 
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark")
      setText("light")
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      showAlert("Dark mode has been enabled","success")
    }
    else
    {
      setMode("light")
      setText("dark")
      document.body.style.backgroundColor="white"
      document.body.style.color="dark"
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    {/*<Router> */}
      <Navbar title="TextUtils" aboutText="About" state={mode} enableMode={toggleMode} text={text}/>
      <Alert alert={alert}/>
      <div className="container">
        {/* <Switch> */}
              {/* <Route exact path="/about"> */}
                {/* <About state={mode} text={text} heading="About Us"/> */}
              {/* </Route> */}
              {/* <Route exact path="/"> */}
                <div className={`container text-${text}`}>
                  <TextForm heading="Text Manipulator" state={mode} showAlert={showAlert}/>
                </div>
              {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
