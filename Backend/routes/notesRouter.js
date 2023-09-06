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
module.exports = router;
