import NotesRender from './NotesRender'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const Home = (props) => {
    const notesList = useContext(NoteContext)
    const { notes } = notesList
    return (
        <>
            <div className='container d-flex'>
                <button type="button" className="btn"
                    style={{
                        backgroundColor: 'rgb(214, 206, 54)',
                        borderRadius: '40%',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,

                        // zIndex:0
                        margin: '20px'
                    }}><i className="ri-add-circle-line" style={{ fontSize: '2rem' }}></i></button>
            </div>
            <div className='row'>
                {notes.map((element) => {
                    return <div className="col-md-3" key={element._id}>
                        <NotesRender title={element.title} desc={element.description} tag={element.tag}/>
                    </div>
                })}
            </div>
        </>
    )
}

export default Home