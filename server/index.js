const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const mongoose = require('mongoose')
const Product = require('./models/product');
const handleAsync = require('./utils/handleAsync')


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

app.post('/api/add-product',async (req,res)=>{
    const  productData = req.body
    const addProduct = new Product(productData)
    await addProduct.save()
    console.log('Received data:', productData);
    res.status(200).json({ message: 'Project registration successful' });
})

app.get('/api/fetch-edit-product/:productId', async(req,res)=>{
    const {productId} = req.params;
    const foundProduct = await Product.findById(productId)
    // console.log(foundProduct)
    res.status(200).json(foundProduct)
})

app.put('/api/edit-product/:productId', async(req,res)=>{
    const {productId} = req.params;
    const newData = req.body;
    const foundProduct = await Product.findByIdAndUpdate(productId,newData, {
        new:true
    });
    console.log(foundProduct)
    res.status(200).json({message: 'Made The changes in the Projects'})
})

app.delete('/api/delete-product/:productId',async(req,res)=>{
    const {productId} = req.params
    const foundProduct = await Product.findByIdAndDelete(productId)
    console.log('Deleted :', foundProduct)
    res.status(200).json({message:"Product Deleted."})
})


app.listen(3000, ()=>{console.log('ON PORT 3000')})
