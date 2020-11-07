import { Router } from 'express'
import {Notes, NotesProps} from './models/notes'
const route = Router()


route.get('/notes/search', async (request, response) => {
    try{
        const { text } = request.query
        const notes = await Notes.find({
            $or: [
                {title: { "$regex": text, "$options": "i" } },
                {body: { "$regex": text, "$options": "i" }}
            ]
        })
        return response.status(200).json(notes)
    }catch(error){
        console.error(error)
        return response.status(500).json("Internal Server Error")
    }
})

route.get('/notes', async (request, response) => {
    try{
        const notes = await Notes.find()
        return response.status(200).json(notes)
    }catch(error){
        console.error(error)
        return response.status(500).json("Internal Server Error")
    }
    
})

route.post('/notes', async (request, response) => {
    try{
        const { title, body, date } = request.body
    
        const note = await Notes.create({
            title,
            body,
            date
        })
    
        return response.status(201).json(note)
    }catch(error){
        console.error(error)
        return response.status(500).json("Internal Server Error")
    }
    
})

route.put('/notes', async (request, response) => {
    try{
        const { id, title, body, date } = request.body

        if(!id){
            return response.status(401).json("ID not provided")
        }
        
        const note = await Notes.updateOne({
            _id: id
        }, {
            title,
            body,
            date
        })

        return response.status(200).json(note)

    }catch(error){
        console.error(error)
        return response.status(500).json("Internal Server Error")
    }
})

export default route