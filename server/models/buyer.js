const mongoose=require("../config/dbConnect");

let buyerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    address:String,
    transaction:[
        {
            type:String,
            ref:"transaction"
        },
    ],
    totalDebtMoney:Number,
    totalPaidMoney:Number
},{
    timestamps: true,
});

let BuyerModel = mongoose.model("buyer", buyerSchema);
module.exports = BuyerModel;