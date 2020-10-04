const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Bike = new Schema({
    name: {type: String, required: true, unique: true},
    type: {
        type: String,
        enum: ['Road', 'Mountain', 'Children','Custom'] ,default:'Custom'
      },
    price: { type: Number, min: 10, max: 1000, required: true },
    
    
})

module.exports = mongoose.model('Bike', Bike);