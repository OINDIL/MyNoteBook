import React, { useContext } from 'react'
import darkContext from '../context/darkMode/darkContext';
import { Link } from "react-router-dom";
const NotesRender = (props) => {
    const DarkMode = useContext(darkContext)
    const {mode} = DarkMode
const {title,desc,tag} = props
    return (
        <>
        <div className="container">
            <div className={`card text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`}>
                <h5 className="card-header">{tag}</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <Link to="/" className="btn btn-primary mx-2"><i className="ri-edit-box-line"></i></Link>
                    <Link to="/" className="btn btn-danger mx-2"><i className="ri-delete-bin-line"></i></Link>
                    <Link to="/" className="btn btn-success mx-2"><i className="ri-clipboard-line"></i></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default NotesRender