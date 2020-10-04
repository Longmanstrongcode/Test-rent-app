
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const Bike = require("./models/Bike");


const app = express();
const PORT =config.get('serverPort');
const start = async () => {
    try{
        await mongoose.connect('mongodb+srv://Valera:3066Db88@cluster0.sgxx4.azure.mongodb.net/Cluster0?retryWrites=true&w=majority', {useNewUrlParser: true} );

        app.listen(PORT, ()=> {
            console.log('Server have been start on port',PORT)
        } )
    }catch(e){

    }
}


start();

Bike.create({
    name: 'Mazda',
    type: 'default' 
    price:25

})