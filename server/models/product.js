const mongoose=require("../config/dbConnect");

let productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    partner:{
        type:String,
        required:true
    },
    moneyIn:{
        type:Number,
        required:true,
        default:0
    },
    moneyOut:{
        type:Number,
        required:true,
        default:0
    },
    profit:{
        type:String,
        required:true,
    }
},{
    timestamps: true,
});

let ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;