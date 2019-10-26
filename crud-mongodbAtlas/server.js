const express=require('express');
const mongoose=require('mongoose');
const foodRouter=require('./routes/FoodRoutes.js');

const app=express();
app.use(express.json());

mongoose.connect(" ",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}); // add your connection string from mongoAtlas in " "

app.use(foodRouter);
app.listen(3000, () => { console.log('Server is running...') });
