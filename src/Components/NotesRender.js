import React from 'react'

import { Link } from "react-router-dom";
const NotesRender = (props) => {
const {title,desc,tag} = props
    return (
        <>
            <div className="card">
                <h5 className="card-header">{tag}</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </>
    )
}

export default NotesRender