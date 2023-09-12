import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './Components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');

  function togglefunc(){
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = 'rgb(32, 33, 36)' 
      document.body.style.color = 'white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' 
      document.body.style.color = 'black'
    }
  }
  return (
    <>
      <div>
        <Router>
        <Navbar mode={mode} togglefunc={togglefunc}/>
          <Routes>
            <Route exact path='/about' element={<About/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
