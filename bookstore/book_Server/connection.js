// import mongoose
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongoose Connected Successfully");
}).catch((err)=>{
    console.log(`not connected ${err}`);
})

