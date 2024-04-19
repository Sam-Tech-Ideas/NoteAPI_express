import { Request, Response } from "express";

import Note from "../models/Note";

export async function deleteNoteController(req: Request, res: Response) {
    const noteId = req.params.noteId;

    const note = await Note.findByIdAndDelete(noteId);

    res.json(note);

}