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
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    props.showAlert("Text copied to clipboard!", "success");
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
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
      .map(el => {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      })
      .join(" ");
    setText(newText);
    props.showAlert("Words capitalized!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div 
        className="container" 
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        
        <div className="mb-3 position-relative">
          <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange}
            style={{
              backgroundColor: 'white', 
              color: 'black'
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

        <button 
          className="btn btn-info mx-1 my-1" 
          disabled={text.length === 0}
          onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        
        <button 
          className="btn btn-warning mx-1 my-1" 
          disabled={text.length === 0}
          onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        
        <button 
          className="btn btn-danger mx-1 my-1" 
          disabled={text.length === 0}
          onClick={handleClearClick}>
          Clear Text
        </button>
        
        <button 
          className="btn btn-primary mx-1 my-1" 
          disabled={text.length === 0}
          onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        
        <button 
          className="btn btn-success mx-1 my-1" 
          disabled={text.length === 0}
          onClick={handleSpeak}>
          🔊 Read Text
        </button>
        
        <button 
          className="btn btn-dark mx-1 my-1" 
          disabled={text.length === 0}
          onClick={handleCapitalize}>
          Capitalize Words
        </button>
      </div>

      <div 
        className="container my-3" 
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length} words and {text.length} characters
        </p>
        
        <p>
          {0.008 * text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length} Minutes read
        </p>
        
        <h2>Preview</h2>
        <p>
          {text.length > 0 
            ? text 
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
