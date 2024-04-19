import mongoose from 'mongoose'

const Schema = mongoose.Schema;



const NoteSchema = new Schema({
    title:String,
    content:String,
    date:Date
})


const NoteModel = mongoose.model("Note",NoteSchema);

export default NoteModel;