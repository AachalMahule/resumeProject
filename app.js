//Routing
//const express =require('express')
import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'
//set template engine
app.set('view engine', 'ejs')

//   static files
app.use(express.static('public'))
    //load routes
app.use('/', web)


app.listen(port, () => {
    console.log(`Server listing at http://localhost:${port}`)
})