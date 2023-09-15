import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesList =
        [
            {
                "_id": "64f9dce04479237b4be843991",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be843992",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be843993",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be843994",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be843995",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            },
            {
                "_id": "64f9dce04479237b4be843996",
                "user": "64f7505957dc32657bfc29ac",
                "title": "hello",
                "description": "This note has been updated after the first completion of the api",
                "tag": "updates",
                "date": "2023-09-07T14:23:28.806Z",
                "__v": 0
            }
        ]
    const [notes, setNotes] = useState(notesList)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;