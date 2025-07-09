const express = require('express');
const connectedToDB=require('./src/db/db');
const noteModel=require('./src/models/note.model')


connectedToDB();
const app = express();
app.use(express.json());


let notes=[];


app.post('/notes', async(req,res)=>{
    const {title,content} = req.body;
    notes.push(req.body);
    
    console.log(title,content);

    await noteModel.create({
        title,content
    })

    res.json({
        message:'noted added successfully',
    })
})

app.get('/notes',async(req,res)=>{
    const notes= await noteModel.find();
    res.json({
        massage:'Note added successfully',
        notes:notes
    })
})

app.listen(3006,()=>{
    console.log('Server is running on port 3006');
})