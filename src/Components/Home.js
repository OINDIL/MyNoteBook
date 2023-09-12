import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const Home = () => {
    const notesList = useContext(NoteContext)
    const {notes,setNotes} = notesList
    return (
        <>
            <div className='container d-flex'>
                <button type="button" className="btn" 
                style={{backgroundColor:'rgb(214, 206, 54)', 
                borderRadius:'40%',
                position:'absolute',
                bottom:0,
                right:0,
                
                // zIndex:0
                margin:'20px'
                }}><i className="ri-add-circle-line" style={{fontSize:'2rem'}}></i></button>
                <h1>{notes.map((element)=>{
                    return element.description
                })}</h1>
            </div>
        </>
    )
}

export default Home