//data base is always in another continent

import connectDB from "./db/index.js"
import dotenv from 'dotenv'
import {app} from './app.js'
const servingPort = process.env.PORT || 8000;
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(servingPort, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})












/*
import express from 'express'
const app = express();


//professional start this lines with semicolon
;( async () => {
    try
    {
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}');
        app.on("error", (error)=> {
            console.error("Error: ", error);
            throw err;
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    }
    catch(error)
    {
        console.error("Error: ", error);
        throw err;
    }
})();
*/