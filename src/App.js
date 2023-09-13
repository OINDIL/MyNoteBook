import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './Components/About';
import { useState } from 'react';
import Home from './Components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  function showAlert(message,type){ // for showing alert to Home/About
    setalert({
      msg:message,
      typeOfMsg:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  function togglefunc() {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = 'rgb(32, 33, 36)'
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Dark Mode has been disabled","success") 
    }
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} togglefunc={togglefunc}/>
          <Alert alert = {alert}/>
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert}/>}></Route>
          </Routes>
          <Routes>
            <Route exact path='/about' element={<About showAlert={showAlert}/>}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
