const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Category: {
        type:String,
        enum: ['type1' ,'type2','type3','type4'],
        required: true
    },
    Image:{
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    InStock: {
        type: Boolean,
        // required: true
    }
})

ProductSchema.pre('save', function(next){
    this.InStock = this.Quantity > 0; // Comparison Returns True or false
    next();
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;