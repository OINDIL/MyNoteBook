const express = require("express");
const router = express.Router();
const fetchuser = require("../MiddleWare/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
// ROUTE - 1:  A note is fetched here. Login required. GET 'api/note/fetchallnotes'
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id }); // looking for notes for the specific user
        res.json(notes);

    } catch (error) {
        res.status(500).json({ error: "Internal server Error 1"});
    }
});
// ROUTE - 2:  A note is created here. Login required. post 'api/note/addnote'
router.post("/addnote",fetchuser,[
    body('title','Please enter a title more than 3 characters').isLength({min: 3})
], async (req, res) => {
            try {
                const { title, description, tag } = req.body;
                // if there are errors throw new errors
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                const note = new Note({
                    title,
                    description,
                    tag,
                    user: req.user.id,
                });
                const savedNote = await note.save();
                res.json(savedNote);
            } catch (error) {
                res.status(500).json({ error: "Internal server Error 2"});
            }
        }
);
// ROUTE - 3:  A note is updated here. Login required. PUT 'api/note/updatenote'
router.put("/updatenote/:id",fetchuser, async (req, res) => {
    const {title,description,tag} = req.body
    try {
    // Create a new note object
    let newNote = {}
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}

    // Find the note to be updated and update it
    // let note = Note.findByIdAndUpdate()
    let note = await Note.findById(req.params.id) // finds the note to the given id in the url
    if(!note){return res.status(404).send('Not Found')} // no note will be shown if id is not available
    if(note.user.toString() !== req.user.id){ // matches the given id to the existing id
        return res.status(401).send('Not allowed')
    }
    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true}) // updates the note
    res.json(note)
} catch (error) {
    res.status(500).json({ error: "Internal server Error 2"});
}
});
// ROUTE - 4:  A note is deleted here. Login required. DELETE 'api/note/deletenote'
router.delete("/deletenote/:id",fetchuser, async (req, res) => {
    try {
    let note = await Note.findById(req.params.id) // finds the note to the given id in the url
    if(!note){return res.status(404).send('Not Found')} // no note will be shown if id is not available
    if(note.user.toString() !== req.user.id){ // matches the given id to the existing id
        return res.status(401).send('Not allowed')
    }
    note = await Note.findByIdAndDelete(req.params.id) // updates the note
    res.json({"Success": "Note has been deleted", title: note.title})
}  catch (error) {
    res.status(500).json({ error: "Internal server Error 2"});
}
});
module.exports = router;
