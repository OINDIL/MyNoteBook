import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesList =
        [
            {
                "_id": "64f9dce04479237b4be84399",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be84399",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be84399",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be84399",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be84399",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be84399",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            }
        ]
    const [notes, setNotes] = useState(notesList)
        console.log(notes._id)
    return (
        <NoteContext.Provider key={notes._id} value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;