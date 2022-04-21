import 'dotenv/config'
import express from "express"
import serverRoutes from './routes/routes.js'
import cors from 'cors'
import mongoose from './mongo.js'
import db from "mongoose"

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(serverRoutes)
app.use(express.json())

app.listen(PORT, ()=>{
    `server has been started on port ${PORT}`
})