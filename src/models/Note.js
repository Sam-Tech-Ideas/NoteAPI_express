"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
var NoteSchema = new Schema({
    title: String,
    content: String,
    date: Date
});
var NoteModel = mongoose_1.default.model("Note", NoteSchema);
exports.default = NoteModel;
