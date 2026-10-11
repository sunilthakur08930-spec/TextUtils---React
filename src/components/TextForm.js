import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText.trim());
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is being read aloud!", "success");
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Words capitalized!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Clean word count logic
  const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;

  return (
    <>
      <div className="container">
        <h2 className="mb-3 fw-bold">{props.heading}</h2>
        
        <div className="mb-3 position-relative">
          <textarea 
            className="form-control shadow-sm" 
            value={text} 
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#1e1e1e' : '#ffffff', 
              color: props.mode === 'dark' ? '#ffffff' : '#000000',
              borderColor: props.mode === 'dark' ? '#333333' : '#ced4da'
            }}
            id="myBox" 
            rows="8" 
            placeholder="Enter text here"
          ></textarea>
          
          <button 
            className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2" 
            disabled={text.length === 0}
            onClick={handleCopy}
            style={{ zIndex: 10 }}>
            📋 Copy Text
          </button>
        </div>

        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-success mx-1 my-1" disabled={text.length === 0} onClick={handleSpeak}>🔊 Read Text</button>
        <button className="btn btn-dark mx-1 my-1" disabled={text.length === 0} onClick={handleCapitalize}>Capitalize Words</button>
      </div>

      <div className="container my-4">
        <h3 className="fw-bold">Your text summary</h3>
        <p className="fs-5">{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>
        
        <h3 className="fw-bold mt-4">Preview</h3>
        <p className="fs-6">{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
