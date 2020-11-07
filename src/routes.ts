import { Router } from 'express'
import { createNote, getAllNotes, getOneNote, searchNote, updateNote } from './controllers/notesController'
import { createComment, getAllComments  } from './controllers/commentsController'

const route = Router()


route.get('/notes/search', searchNote)
route.get('/notes', getAllNotes)
route.get('/note/:id', getOneNote)
route.post('/notes', createNote)
route.put('/notes', updateNote)


route.get('/comments', getAllComments)
route.post('/comments', createComment)

export default route