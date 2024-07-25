const books = require("../model/bookmodel");
const jwt = require("jsonwebtoken")


// register
exports.addBookController =async(req, res)=>{
    const {name, description, price, author, language, year, cover_image } = req.body
    try {
        const existinguser = await user.findOne({name})    
        if(existinguser){
            res.status(406).json("Book Already Exist")   
        }
        else{    
            const newbook = new user({
                name,
                description,
                price,
                author,
                language,
                year,
                cover_image
            })
            await newbook.save()
            res.status(200).json(newbook)
        }
        
    } catch (error) {
        res.status(401).json(`Ading New Book Failed due to ${error}`)
    }

    
}


exports.getBookController = async(req, res)=>{
    try {
        const allbook = await books.find()
        if(allbook){
            res.status(200).json({allbook})
        }
        }  catch (error) {
        res.status(401).json(error)
    }
}

   



