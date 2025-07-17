const mongoose = require('mongoose');

function connectedToDB(){
    mongoose.connect('mongodb+srv:// Write the your db links.....')
    .then(()=>{
         console.log('Connected Database');
    })
}

module.exports = connectedToDB;
