import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  // React.useEffect(() => { // not working till now
  //   console.log(location)
  // }, [location]);
  return (
    <>
      <nav className={`navbar navbar-expand-lg text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`text-${props.mode === 'dark' ? 'light' : 'dark'} navbar-brand`} to='/'>MyNotes.</Link>
          <div className="form-check-reverse form-check form-switch" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglefunc} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i className="ri-contrast-2-line" ></i></label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
