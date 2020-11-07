import express from 'express'
import routes from './routes'
import {db} from './database/Mongoose'
const app = express()

app.use(express.json())
app.use(routes)


function server(){
  try{
    console.log("Iniciando banco de dados")
    db.once('open', () => {
      if(db.readyState === 1) {
        app.listen(3333, () => {
          console.log("Servidor na porta 3333")
        })
      }
    })

    db.once('error', (error) => {
      throw new Error(error)
    })
  }catch(error){
    console.error(error)
  }
}

server()
