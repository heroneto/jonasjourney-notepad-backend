import { Router } from 'express'
import { createNote, getAllNotes, getOneNote, removeNote, searchNote, updateNote } from './controllers/notesController'
import { createComment, getAllComments, updateComment, updateCommentNoteReference, getOneComment, searchComment, removeComment  } from './controllers/commentsController'

const route = Router()


route.get('/notes/search', searchNote)
route.get('/notes', getAllNotes)
route.get('/note/:id', getOneNote)
route.post('/notes', createNote)
route.put('/notes', updateNote)
route.delete('/notes/:id', removeNote)


route.get('/comments/search', searchComment)
route.get('/comment/:id', getOneComment)
route.get('/comments', getAllComments)
route.post('/comments', createComment)
route.put('/comments', updateComment)
route.put('/comments/:id/note/:noteid', updateCommentNoteReference)
route.delete('/comments/:id', removeComment)

export default route