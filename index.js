const express= require('express')
const feedRoutes=require('./routes/feeds')
const app =express()

//app.use(express.urlencoded())
app.use(express.json())
app.use('/feed',feedRoutes)


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
    next()
})
app.listen(8080,()=>{
    console.log(`Node server running in  port 8080`)
})