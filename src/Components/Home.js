import NotesRender from './NotesRender'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import InputField from './InputField'
const Home = (props) => {
    const notesList = useContext(NoteContext)
    const { notes } = notesList
    return (
        <>
            <div className="container">
            <InputField/>
            <div className='row'>
                {notes.map((element) => {
                    return <div className="col-md-3" key={element._id}>
                        <NotesRender title={element.title} desc={element.description} tag={element.tag}/>
                    </div>
                })}
            </div>
            </div>
        </>
    )
}

export default Home