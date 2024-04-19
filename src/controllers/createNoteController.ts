import { Request,Response } from "express";

import Note from '../models/Note'


export async function createNoteController(req:Request,res:Response){
    
    const newNote = new Note({
        title:req.body.title,
        content:req.body.content,
        date:Date.now()
    });
    const noteSaved = await newNote.save();
    res.json(noteSaved);
}