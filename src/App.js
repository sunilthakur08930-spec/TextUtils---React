import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (cls) => {
    // Custom color modes
    if (cls === 'danger') {
      document.body.style.backgroundColor = '#f31809';
      document.body.style.color = 'white';
      showAlert("Red mode enabled", "danger");
      return;
    } 
    else if (cls === 'success') {
      document.body.style.backgroundColor = '#12fc19';
      document.body.style.color = 'white';
      showAlert("Green mode enabled", "success");
      return;
    } 
    else if (cls === 'primary') {
      document.body.style.backgroundColor = '#1708e9';
      document.body.style.color = 'white';
      showAlert("Blue mode enabled", "primary");
      return;
    } 
    else if (cls === 'warning') {
      document.body.style.backgroundColor = '#f7db0df4';
      document.body.style.color = 'white';
      showAlert("Yellow mode enabled", "warning");
      return;
    }

    // Default Light / Dark toggle
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#6c88a5f1';
      document.body.style.color = 'black';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router basename="/TextUtils---React">
      <Navbar 
        title="TextUtils" 
        aboutText="About"
        mode={mode} 
        toggleMode={toggleMode} 
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
