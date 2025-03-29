const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then (()=>{
    console.log("CONNECTED TO MONGO")
})
.catch(err =>{
    console.log('ERROR')
})

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/buyer',(req,res)=>{
    res.render('buyer')
})

app.post('/buyer',(req,res)=>{
    res.send('buyer Created')
})

app.get('/seller',(req,res)=>{
    res.render('seller')
})

app.post('/seller',(req,res)=>{
    res.send('seller Created')
})

app.get('/product',(req,res)=>{
    res.render('product')
})

app.post('/product',(req,res)=>{
    res.send('Product Created')
})

app.listen(3000, ()=>{console.log('ON PORT 3000')})