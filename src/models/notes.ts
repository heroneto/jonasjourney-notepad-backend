import mongoose, {Document} from 'mongoose'
const Schema = mongoose.Schema


const NoteSchema  = new Schema({
    title: { type: String, default: ""},
    body: { type: String, default: ""},
    date: { type: Date, default: new Date() }
})



export const Notes = mongoose.model('Notes', NoteSchema)

export interface NotesProps extends Document {
    title: string,
    body: string,
    date: Date,
    _id: string
}