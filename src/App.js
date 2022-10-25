import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from "react-router-dom"

function App() {
  const [brand, setBrand] = useState('');
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled", "success");
      document.title = 'DP-Text-Dark Mode';
      setBrand('DPFIRST');
      // setInterval(() => {
      //   document.title = 'DP-Text is Best';
      // }, 2000);
      // setInterval(() => {
      //   document.t itle = 'install DP Text Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
      document.title = 'DP-Text-Light Mode';
      setBrand('Text-Utils');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="DPFIRST" aboutText="About DP" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} header={brand} />} />
          <Route exact path="/" element={<TextForm heading="Text Utils is Awesome." mode={mode} />} />
        </Routes>
      </Router>
      {/* <Navbar title="dpFIrst" aboutText="About DP" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Text Utils is Awesome." mode={mode} /> */}
    </>
  );
}

export default App;
