import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

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
    }, 4000);
  }

  const toggleMode = (cls) => {
    if (cls === 'danger') {
      document.body.style.backgroundColor = '#ff0217db';
      showAlert("Red mode has been enabled", "danger");
      return;
    } 
    else if (cls === 'success') {
      document.body.style.backgroundColor = '#2fff00f1';
      showAlert("Green mode has been enabled", "success");
      return;
    } 
    else if (cls === 'primary') {
      document.body.style.backgroundColor = '#0000ffeb';
      showAlert("Blue mode has been enabled", "primary");
      return;
    } 
    else if (cls === 'warning') {
      document.body.style.backgroundColor = 'rgba(251, 255, 0, 0.94)';
      showAlert("Yellow mode has been enabled", "warning");
      return;
    }
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
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