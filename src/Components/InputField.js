import React,{useContext, useState} from 'react'
import darkContext from '../context/darkMode/darkContext'
import NoteContext from '../context/notes/noteContext'
const InputField = () => {
    const Notes = useContext(NoteContext)
    const {addNote} = Notes
    const DarkMode = useContext(darkContext)
    const {mode} = DarkMode

    const [Note, setNote] = useState({tag:'',title:'',desc:''})

    const handleClick = (event) =>{
        event.preventDefault()
        addNote(Note.tag,Note.title,Note.desc)
    }
    const onChange = (event) =>{
        setNote({...Note,[event.target.name]: event.target.value}) // set the target name equal to target value
    }
    return (
        <>
        <div className="container" >
                <label htmlFor="tag" className={`text-${mode === 'dark' ? 'light' : 'dark'}`} >Enter a tag</label>
                <input type="text" id='tag' name='tag' className={`form-control text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode} my-2`} aria-label="Text input with segmented dropdown button" onChange={onChange}/>
                <label htmlFor="title" className={`text-${mode === 'dark' ? 'light' : 'dark'}`} >Enter a title</label>
                <input type="text" id='title' name='title' className={`form-control text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode} my-2`} aria-label="Text input with segmented dropdown button" onChange={onChange}/>
                <label htmlFor="desc" className={`text-${mode === 'dark' ? 'light' : 'dark'}`} >Enter a description</label>
                <textarea type="text" id='desc' name='desc' className={`form-control text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode} my-2`} rows='4' aria-label="Text input with segmented dropdown button" onChange={onChange}></textarea>
                <button type="button" className="btn mb-3" onClick={handleClick}
                    style={{
                        backgroundColor: 'rgb(214, 206, 54)',
                        zIndex:0
                    }}><i className="ri-add-circle-line"></i>Add Note</button>
        </div>
        </>
    )
}

export default InputField