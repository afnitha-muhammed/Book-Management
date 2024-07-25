
require('dotenv').config() 

const express = require('express')

const cors = require('cors')

const router = require('./routes')

require('./connection')

const pfserver = express()

pfserver.use(cors())

pfserver.use(express.json())

pfserver.use(router)

PORT = 3004 || process.env.PORT

pfserver.listen(PORT,()=>{
    console.log(`Server Running Successfully at ${PORT}`);
})
