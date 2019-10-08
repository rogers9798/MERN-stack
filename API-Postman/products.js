const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        message:"handling get requests from /products"
    });
});

router.get('/:productID',(req,res)=>{

    const id=req.params.productID;
if(id==='special'){

    res.status(200).json({
        message:"handling get requests from /:productID",
        data:'you discovered the specialID',
        id:id
    });
}
else{
    res.status(200).json({
        message:"wrong ID passed",
        
    });
}

});

router.post('/',(req,res)=>{
    const product ={
        name:req.body.name,
        price:req.body.price
    }
    res.status(200).json({
        message:"handling get requests from /products",
        createdProduct:product
    });

});

router.patch('/:productID',(req,res)=>{
    res.status(200).json({
        message:"Updated Product!! Fuck yeah"
    });

});

router.delete('/:productID',(req,res)=>{
    res.status(200).json({
        message:"Deleted Product!! Fuck No"
    });

});

module.exports=router
