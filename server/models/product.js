const mongoose=require("../config/dbConnect");

let productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        ref:"categories"
    },
    image:{
        type:String,
    },
    partner:{
        type:String,
        ref:"partner"
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
        default:0
    },
    dateIn:{
        type:String
    }
},{
    timestamps: true,
});

let ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;