const express=require("express");
const cors=require("cors");
const env=require("dotenv");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const morgan=require("morgan");
const  path =require("path")

//routes
const indexRoute = require("./routes/index") 
const partnerRoute = require("./routes/partner");
const categoryRoute = require("./routes/category"); 
const buyerRoute = require("./routes/buyer");
const productRoute = require("./routes/product");
const transactionRoute = require("./routes/transaction");


env.config();

const app=express();

app.use(cors({origin:true,credentials:true}));
app.use(morgan("dev"));


// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookie-parser
app.use(cookieParser());

//public file
app.use("/public", express.static(path.join(__dirname + "/public")));

//routers
app.use("/",indexRoute);
app.use("/partner",partnerRoute);
app.use("/category",categoryRoute)
app.use("/buyer",buyerRoute);
app.use("/product",productRoute);
app.use("/transaction",transactionRoute);



const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("App is running...");
})



