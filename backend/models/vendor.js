const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    VendorName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required:true
    },
    products: [
            {
                type : mongoose.Schema.Types.ObjectId, 
                ref: 'Product'
            }
        ]
})
const Vendor = mongoose.model('Vendor', VendorSchema)
module.exports = Vendor;