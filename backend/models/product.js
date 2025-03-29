const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    category: {
        enum: ['type1,type2,type3,type4'],
        required: true
    },
    image:{
        type: String,
        required: true
    },
    instock: {
        type: Boolean,
        required: true
    }
})