import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import DarkState from './context/darkMode/DarkState';
import { useState } from 'react';
function App() {
  const [alert,setalert] = useState(null)
  // const [mode, setMode] = useState('light');]
  function showAlert(message, type) { // for showing alert to Home/About
    setalert({
      msg: message,
      typeOfMsg: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <>
      <DarkState showAlert={showAlert}>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={alert}/>
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert}/>}></Route>
            </Routes>
            <Routes>
              <Route exact path='/about' element={<About showAlert={showAlert}/>}></Route>
            </Routes>
          </Router>
        </NoteState>
      </DarkState>
    </>
  );
}

export default App;
