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
})



export const Notes = mongoose.model('Notes', NoteSchema)