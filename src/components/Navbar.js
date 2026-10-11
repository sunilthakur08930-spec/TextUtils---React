import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'} border-bottom shadow-sm`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          {props.title}
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          
          {/* Color Palettes with Names */}
          <div className="d-flex align-items-center me-3 flex-wrap">
            <button type="button" className="btn btn-sm btn-outline-danger mx-1 my-1" onClick={() => props.toggleMode('danger')}>Red Mode</button>
            <button type="button" className="btn btn-sm btn-outline-success mx-1 my-1" onClick={() => props.toggleMode('success')}>Green Mode</button>
            <button type="button" className="btn btn-sm btn-outline-primary mx-1 my-1" onClick={() => props.toggleMode('primary')}>Blue Mode</button>
            <button type="button" className="btn btn-sm btn-outline-warning mx-1 my-1" onClick={() => props.toggleMode('warning')}>Yellow Mode</button>
          </div>

          {/* Single Simple Light/Dark Button */}
          <button 
            type="button" 
            className={`btn btn-sm ${props.mode === 'light' ? 'btn-dark' : 'btn-light'} mx-1 my-1 fw-bold`} 
            onClick={() => props.toggleMode()}
          >
            {props.mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};
