import '@babel/polyfill'
import express from 'express'
import mongoose from 'mongoose'

//importting routes
import UsersRouter from './routes/users'
import ActorsRouter from './routes/actors'

// Defino mi puerto
const PORT = 3000
//creating express application
const app = express()
// adding middlewares for parse data from requests
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Register routes
app.use('/users', UsersRouter)
app.use('/actors', ActorsRouter)

// Connecting to Mongo Service
mongoose.connect('mongodb://localhost:27017/rating-movies', {
    userNewUrlParser: true
}, (err) => {
    if(err) throw err
    // Mounting the app on specific PORT
    app.listen(PORT, () => {
        console.log(`Rating movies API is listening in port ${PORT}`)
    })
    
})


