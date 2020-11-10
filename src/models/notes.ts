import mongoose, {Document} from 'mongoose'
const Schema = mongoose.Schema


const NoteSchema  = new Schema({
	title: { 
		type: String, 
		default: ""
	},
	body: { 
		type: String, 
		default: ""
	},
	date: { 
		type: Date, 
		default: new Date()
	},
	comments: [
		{ 
			type: mongoose.Schema.Types.ObjectId,
			ref:'Comments'
		}
	]
}, {
	timestamps: true
})

export interface NoteProps extends Document{
  title: string,
  body: string,
  date: Date,
  comments: Array<string>
}




export const Notes = mongoose.model<NoteProps>('Notes', NoteSchema)