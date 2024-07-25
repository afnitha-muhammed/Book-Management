const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    cover_image:{
        type:String,
        required:true
    }
})

const books = mongoose.model("books",bookSchema)

module.exports = books