import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesList =
        [
            {
                "_id": "64f9dce04479237b4be843991",
                "user": "64f7505957dc32657bfc29ac",
                "title": "title",
                "description": "description",
                "tag": "tag",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            }
        ]
    const [notes, setNotes] = useState(notesList)
    // Add Note
        function addNote(tag,title,desc){
            console.log('adding a new note')
            let note = {
                "_id": "64f9dce04479237b4be843996",
                "user": "64f7505957dc32657bfc29acf",
                "title": title,
                "description": desc,
                "tag": tag,
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            }
            setNotes(notesList.concat(note)) // pushing the note in the noteList array of notes
        }
    // Delete Note
        function deleteNote(){
            // Todo
        }
    // Edit Note
    function editNote(){
        // Todo
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes,addNote,editNote,deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;