const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    title:String,
    content:String
})

const noteModel = new mongoose.model('note',noteSchema);

module.exports=noteModel;