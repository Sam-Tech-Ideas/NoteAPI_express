
import { Request, Response } from "express";

import Note from "../models/Note";



export async function getNotesController(req:Request,res:Response){
    const notes = await Note.find();
    res.json(notes);
}