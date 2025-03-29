const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    VendorName: {
        type: String,
        required: true
    },
    CompanyName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required:true
    },
    Contact: {
        type: Number,
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




