import React,{useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("")
  
  const handleUpClick=()=>{
    // console.log("uppercase");

    setText(text.toUpperCase())
    {props.showAlert("Converted to UpperCase","success")}
  }

  const handleLoClick=()=>{
    // console.log("LowerCase");
    setText(text.toLowerCase())
    {props.showAlert("Converted to LowerCase","success")}
  }

  const handleClear=()=>{
    setText("")
    {props.showAlert("Text Cleared","success")}
  }

  const handleCopy=()=>{
    let text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    {props.showAlert("Text Copied","success")}
  }

  // const handlePaste=()=>{
  //   navigator.clipboard.readText().then(text => document.querySelector('#myBox').value = text);
  //   setText(text);
  // }

  const removeSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    {props.showAlert("Extra Spaces Removed","success")}
  }

  const handleOnChange=(e)=>{
    setText(e.target.value)
  }
  return (
    <>
      <div className="container">
      <h1>{props.heading}</h1>
        <textarea className={`form-control bg-${props.state} text-${props.state=="dark"?"light":"dark"}`} id="myBox" rows="8" value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-primary" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        {/* <button className="btn btn-primary" onClick={handlePaste}>Paste</button> */}
        <button className="btn btn-primary" onClick={removeSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").filter((e)=>{return e.length!==0}).length)} minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
      </div>
    </>
  );
}
