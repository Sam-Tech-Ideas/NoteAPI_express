"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const createNoteController_1 = require("./src/controllers/createNoteController");
const getNotesController_1 = require("./src/controllers/getNotesController");
const Note_1 = __importDefault(require("./src/models/Note"));
const deleteNoteController_1 = require("./src/controllers/deleteNoteController");
const PORT = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)("*"));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post("/notes", createNoteController_1.createNoteController);
app.get("/notes", getNotesController_1.getNotesController);
app.get("/notes/:noteId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield Note_1.default.findById(noteId);
    res.json(note);
}));
app.delete("/notes/:noteId", deleteNoteController_1.deleteNoteController);
mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MONGODB");
    app.listen(PORT, () => console.log("listening on port", PORT));
});
