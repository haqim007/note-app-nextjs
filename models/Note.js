import { Schema, models, model } from "mongoose";

const NoteSchema = new Schema({
    title:{
        type:String,
        required:[true, "Please add title"],
        unique: true,
        trim:true,
        maxlength:[40, "Title cannot more then 40  characters"],
    },
    description:{
        type:String,
        required:true,
        maxlength:[200, "Description cannot more than 200 characters"]
    }
})

export default models.notes || model("notes", NoteSchema)