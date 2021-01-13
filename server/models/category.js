const mongoose=require("../config/dbConnect");

let categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},{
    timestamps: true,
});

let categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;