import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",  {useNewUrlParser: true, useUnifiedTopology: true})
export const db = mongoose.connection
