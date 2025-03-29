const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyerSchema = new Schema ({
    buyerName: {
        type: String,
        required: true
    },
    
    addresses: [
        {
            city : String,
            state : String,
            country : {
                type: String,
                required: true
                }
	    }
    ],

    orders: {
        count:Number,
        productsBought: {
            required: true,
            status: {
                isDelivered:Boolean,
                required: true
            }
        }
    }
    
})

const Buyer = new mongoose.model('Buyer', BuyerSchema)