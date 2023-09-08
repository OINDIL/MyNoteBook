import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './Components/About';
function App() {
  return (
    <>
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/about' element={<About/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
