
const express = require("express");
const mongoose = require("mongoose");
const {createServer} = require('http')
const app = express();
const port = 3000;
const keys = require("./config/keys")
const Bikes = require("./models/Bike")

  mongoose.connect(keys.mongoDb,
         {useNewUrlParser: true, useUnifiedTopology: true},
         )
                      
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));

    const bicycle = new Bikes
    app.get('/', (req, res) => {
         bicycle.create({
          name: 'BMW',
          type:[2],
          cost: 45,
        })
          .then( bicycle => res.save(bicycle))
    .catch(err => res.send(err)); 
    }); 

const server = createServer(app);
server.listen(port, () => console.log(`Server is up on ${port} `));