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
    }
  }
  return (
    <>
      <Router>
        <Navbar title="dpFIrst" aboutText="About DP" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter text below to filter and anylize data." mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
