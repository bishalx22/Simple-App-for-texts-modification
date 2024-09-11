import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase !","success");
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase !","success");
  }
  
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared !","success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(); //text to voice
    msg.text = text;
    window.speechSynthesis.speak(msg);  
    props.showAlert("Hear your text carefully !","success");
  }

  const handleCopy = () => {
    console.log("I am a copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!","success");
  }

  const handleOnChange = (event)=> {
    // console.log("On change");
    setText(event.target.value); //to type user want text otherwise can't type
  }

  const [text,setText] = useState(''); 
  // text = "new text"; //wrong way to change the state
  // setText = "new text"; //Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="mybox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-outline-success mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-outline-danger mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-outline-warning mx-2" onClick={speak} >Speak</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      <p>{ text==="" ?0 :text.trim().split(" ").length} words, {text.length} characters</p>
      <p>Required time to read : {0.008 * (text==="" ?0 :text.trim().split(" ").length)}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
