import path from 'path'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config({path: path.resolve(__dirname, '..', '..', '.env')})

mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    socketTimeoutMS: 45000
  }
)
export const db = mongoose.connection
