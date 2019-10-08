const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        message:"Orders fetched"
    });
});

router.get('/:orderID',(req,res)=>{

const id=req.params.orderID;

    res.status(200).json({
        message:"Order details :",
        id:id
    });
});

router.post('/',(req,res)=>{
    const order ={
        productID:req.body.productID,
        quantity:req.body.quantity
    }
    res.status(200).json({
        message:"Order Created",
        order:order
    });

});

router.delete('/:orderID',(req,res)=>{
    const id=req.params.orderID;
    res.status(200).json({
        message:"Deleted Order!! Fuck No :",
        id:id
    });

});

module.exports=router
