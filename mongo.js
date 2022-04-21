import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.connect(`mongodb+srv://Lena:${process.env.PASSWORD}@cluster0.giufs.mongodb.net/test`, {
    dbName: 'bank-base',
})
const db = mongoose.connection

db.once('open', () => {
    console.log('Connected to DB')
})
 
db.on('error', () => {
    console.log('you have some problem with current connection')
})
export default db