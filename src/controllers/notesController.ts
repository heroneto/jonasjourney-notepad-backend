import { Request, Response, ok, notFound } from '../utils/helpers/http'
import { Notes } from '../models/notes'
import { invalidParameter, missingParameter, serverError } from '../utils/errors'
import { Comments } from '../models/comments'

export const getOneNote = async (request: Request, response: Response) => {
	try{
		const id = request.params.id
		if(!id){
			return missingParameter("ID", response)
		}
		if(id.length !== 24){
			return invalidParameter("ID", response)
		}
		const note = await Notes.findById(id).populate('comments')
		if(!note){
			return notFound("Note", response)
		}
		return ok(note, response)
	}catch(error){
		console.error(error)
		return serverError(response)
	}
}

export const getAllNotes = async (request: Request, response: Response) => {
	try{
		const notes = await Notes.find()
		return ok(notes, response)
	}catch(error){
		console.error(error)
		return serverError(response)
	}
}

export const searchNote = async (request: Request, response: Response) => {
	try{
		const { text } = request.query
		const notes = await Notes.find({
			$or: [
				{title: { "$regex": text, "$options": "i" } },
				{body: { "$regex": text, "$options": "i" }}
			]
		})
		return ok(notes, response)
	}catch(error){
		console.error(error)
		return serverError(response)
	}
}

export const createNote = async (request: Request, response: Response) => {
	try{
		const { title, body, date } = request.body
	
		const note = await Notes.create({
			title,
			body,
			date
		})
	
		return ok(note, response, 201)
	}catch(error){
		console.error(error)
		return serverError(response)
	}
}

export const updateNote = async (request: Request, response: Response) => {
	try{
		const { id, title, body, date } = request.body

		if(!id){
			return missingParameter("ID", response)
		}
		if(id.length !== 24){
			return invalidParameter("ID", response)
		}

		const note = await Notes.findByIdAndUpdate(id, {
			title,
			body,
			date
		})
	
		if(!note){
			return notFound("Note", response)
		}

		return ok(note, response)

	}catch(error){
		console.error(error)
		return serverError(response)
	}
}

export const removeNote = async (request: Request, response: Response) => {
	try{
		const id = request.params.id
		if(!id){
			return missingParameter("ID", response)
		}
		if(id.length !== 24){
			return invalidParameter("ID", response)
		}
		const note = await Notes.findByIdAndDelete(id)
		if(!note){
			return notFound("Note", response)
		}

		await Comments.deleteMany({
			note: note._id
		})

		return ok(note, response)
	}catch(error){
		console.error(error)
		return serverError(response)
	}
}