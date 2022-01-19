const express = require('express')
//const mongoose = require('mongoose')
const url ='mongodb://localhost/deepumusicapi'


const cors  = require('cors')

const app=express()
//connect to mongoDB server

/* mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
const con=mongoose.connection
con.on('open', () =>{
    console.log('connected.....')
}) */

//Middleware
app.use(express.json());
app.use(cors())


const musicRouter = require('./routers/music')
app.use('/music', musicRouter)

//server creation
const PORT = process.env.PORT || 9000;


app.listen(PORT, () =>{
    console.log('server is running at localhost:'+PORT)
})