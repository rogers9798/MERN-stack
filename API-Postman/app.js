const express=require("express");
const app=express();
const bodyParser=require('body-parser')

const morgan=require('morgan');

const productRoutes=require('./products');
const orderRoutes=require('./orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>
{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*')

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,DELETE,PATCH,GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

// app.use((req,res) => {
// res.status(200).json({
// message: "Operation Success"

// });
// console.log("Operation Success");

// });

app.use((req,res,next)=>{
    const error=new Error("Not Found");
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>
{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports=app;