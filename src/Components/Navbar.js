import React ,{useContext}from "react";
import { Link,useLocation  } from "react-router-dom";
import darkContext from '../context/darkMode/darkContext'
const Navbar = () => {
  const DarkMode = useContext(darkContext)
  const {mode,togglefunc} = DarkMode
  let location = useLocation();
  React.useEffect(() => { // not working till now
    console.log(location.pathname)
  }, [location]);
  return (
    <>
      <nav className={`navbar navbar-expand-lg text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`}>
        <div className="container-fluid">
          <Link className={`text-${mode === 'dark' ? 'light' : 'dark'} navbar-brand`} to='/'><span style={{ color: 'rgb(138, 134, 15)' }}>My</span>Notes.</Link>
          {/* here is the dropdown button */}
          <div className="dropdown">
            <button className={`btn dropdown-toggle text-${mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {location.pathname === '/' ? 'Home' : 'About' }
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Home</Link></li>
              <li><Link className="dropdown-item" to="/about">About</Link></li>
            </ul>
          </div>
          
          <div className="form-check-reverse form-check form-switch" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglefunc} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i className="ri-contrast-2-line" ></i></label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
