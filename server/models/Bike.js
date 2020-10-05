const mongoose = require("mongoose");
const Schema = mongoose.Schema ;


const bikeSchema = new Schema({
    name: {
           type: String,
           required: true, 
           unique: true
          },
    type: {
            type: [String],
            enum: ['Road', 'Mountain', 'Children','Retro','Custom'] ,
            "default":'Custom'
          },
    cost: { 
            type: Number,
             min: 10,
             max: 1000,
             required: true 
            },
    bike_id: { 
              type:Schema.Types.ObjectId,
              
              
              },
    
    
})

const Bikes = mongoose.model('bikes', bikeSchema);
module.exports = Bikes;