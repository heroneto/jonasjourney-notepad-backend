import mongoose, {Document} from 'mongoose'
const Schema = mongoose.Schema


const CommentsSchema  = new Schema({
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
  note: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Notes'
  }
  
})



export const Comments = mongoose.model('Comments', CommentsSchema)