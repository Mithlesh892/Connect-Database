const mongoose = require('mongoose');

function connectedToDB(){
    mongoose.connect('mongodb+srv://raymithlesh8927:geDHXgonMZfSdj3U@cluster0.lqnepsv.mongodb.net/cohort')
    .then(()=>{
         console.log('Connected Database');
    })
}

module.exports = connectedToDB;