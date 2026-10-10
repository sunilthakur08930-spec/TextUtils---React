import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  };

  return (
    <div className="container my-3 p-3 rounded" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      
      <div className="accordion" id="accordionExample">
        
        {/* Item 1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button" 
              type="button" 
              style={myStyle} 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="true" 
              aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div 
            id="collapseOne" 
            className="accordion-collapse collapse show" 
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives yo a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              style={myStyle} 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo">
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div 
            id="collapseTwo" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text ith word/ character limit.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              style={myStyle} 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree" 
              aria-expanded="false" 
              aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div 
            id="collapseThree" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
