const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyerSchema = new Schema ({
    BuyerName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Contact: {
        type: Number,
        required: true
    },
    address: {
           type:String,
           required:true
	    },
    // addresses: [
    //     {
    //         city : String,
    //         state : String,
    //         country : {
    //             type: String,
    //             required: true
    //             }
	//     }
    // 
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