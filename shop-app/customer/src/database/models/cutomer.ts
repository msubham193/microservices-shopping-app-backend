import mongoose from "mongoose";


export const customerSchema = new mongoose.Schema({


    email: String,
    password: String,
    salt: String,
    phone: String,

    address:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'address', require: true }
    ],
    cart: [
        {
          product: { 
                _id: { type: String, require: true},
                name: { type: String},
                banner: { type: String},
                price: { type: Number},
            },
          unit: { type: Number, require: true}
        }
    ],

    wishlist:[
        {
            _id: { type: String, require: true },
            name: { type: String },
            description: { type: String },
            banner: { type: String },
            avalable: { type: Boolean },
            price: { type: Number },
        }
    ],
    orders: [
        {
            _id: {type: String, required: true},
            amount: { type: String},
            date: {type: Date, default: Date.now()}
        }
    ]
},{
    toJSON: {
        transform(doc, ret){
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps: true



})

 const Customer = mongoose.model('customer', customerSchema);

export default Customer;