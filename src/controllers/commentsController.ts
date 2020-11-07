import { Request, Response, ok, notFound } from '../utils/helpers/http'
import { Comments } from '../models/comments'
import { Notes } from '../models/notes'
import { invalidParameter, missingParameter, serverError } from '../utils/errors'



export const getAllComments = async (request: Request, response: Response) => {
  try{
    const comments = await Comments.find()
    return ok(comments, response)    
  }catch(error){
    console.error(error)
    return serverError(response)
  }
}

export const createComment = async(request: Request, response: Response) => {
  try{
    const { title, body, date, noteId } = request.body   
    const comment = await Comments.create({
      title, 
      body, 
      date, 
      note: noteId 
    })
    if(!comment){
      throw new Error("Comment not created");      
    }

    if(noteId){
      if(noteId.length !== 24){
        return invalidParameter("ID", response)
      }
      await Notes.findByIdAndUpdate(noteId, {
        $push: {
          comments: comment._id
        }
      })
    }

    return ok(comment, response)    
  }catch(error){
    console.error(error)
    return serverError(response)
  }
}

export const updateComment = async(request:Request, response: Response) => {
  try{
    const { id, title, body, date } = request.body
    if(!id){
			return missingParameter("ID", response)
		}
		if(id.length !== 24){
			return invalidParameter("ID", response)
    }

    const comment = await Comments.findByIdAndUpdate(id, {
			title,
			body,
      date,
		})
	
		if(!comment){
			return notFound("Comment", response)
		}

		return ok(comment, response)

  }catch(error){
    console.error(error)
    return serverError(response)
  }
}