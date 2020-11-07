import { Router } from 'express'
import { createNote, getAllNotes, getOneNote, removeNote, searchNote, updateNote } from './controllers/notesController'
import { createComment, getAllComments, updateComment  } from './controllers/commentsController'

const route = Router()


route.get('/notes/search', searchNote)
route.get('/notes', getAllNotes)
route.get('/note/:id', getOneNote)
route.post('/notes', createNote)
route.put('/notes', updateNote)
route.delete('/notes/:id', removeNote)

route.get('/comments', getAllComments)
route.post('/comments', createComment)
route.put('/comments', updateComment)

export default route