import mongoose, {Document} from 'mongoose'
const Schema = mongoose.Schema


const CommentsSchema = new Schema({
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


export interface CommentsProps extends Document{
  title: string,
  body: string,
  date: Date,
  note: string
}



export const Comments = mongoose.model<CommentsProps>('Comments', CommentsSchema)