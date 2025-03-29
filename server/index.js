const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then (()=>{
    console.log("CONNECTED TO MONGO")
})
.catch(err =>{
    console.log('ERROR')
})

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))


app.post('/api/vendor-registration', async (req,res)=>{
    const data = await req.body;
    await console.log('Received data:', data);
    res.status(200).json({ message: 'Vendor registration successful' });
})

app.post('/api/user-registration', async(req,res)=>{
    const data = await req.body
    await console.log('Received Data: ',data)
    res.status(200).json({message: 'User Registration Successful'})
})

app.post('/api/adding-product', async (req,res)=>{
    const data = await req.body;
    await console.log('Received data:', data);
    res.status(200).json({ message: 'Vendor registration successful' });
})


app.listen(3000, ()=>{console.log('ON PORT 3000')})

// app.get('/seller',(req,res)=>{
//     res.render('seller')
// })

// app.post('/seller',(req,res)=>{
//     res.send('seller Created')
// })

// app.get('/product',(req,res)=>{
//     res.render('product')
// })

// app.post('/product',(req,res)=>{
//     res.send('Product Created')
// })
