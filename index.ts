import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
import cors from "cors";
import { createNoteController } from "./src/controllers/createNoteController";
import { getNotesController } from "./src/controllers/getNotesController";
import Note from "./src/models/Note";
import { deleteNoteController } from "./src/controllers/deleteNoteController";

const PORT = 5000;
const app = express();

app.use(cors("*"));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/notes", createNoteController);
app.get("/notes", getNotesController);
app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  res.json(note);
});

app.delete("/notes/:noteId", deleteNoteController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log("Connected to MONGODB");
  app.listen(PORT, () => console.log("listening on port", PORT));
});
