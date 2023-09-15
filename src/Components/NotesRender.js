import React, { useContext } from 'react'
import darkContext from '../context/darkMode/darkContext';
import { Link } from "react-router-dom";
const NotesRender = (props) => {
    const DarkMode = useContext(darkContext)
    const {mode} = DarkMode
const {title,desc,tag} = props
    return (
        <>
            <div className={`card my-3 text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`}>
                <h5 className="card-header">{tag}</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <Link to="/" className="btn btn-primary mx-2"><i className="ri-file-add-line"></i></Link>
                    <Link to="/" className="btn btn-primary mx-2"><i className="ri-edit-box-line"></i></Link>
                    <Link to="/" className="btn btn-primary mx-2"><i className="ri-delete-bin-line"></i></Link>
                </div>
            </div>
        </>
    )
}

export default NotesRender