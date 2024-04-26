

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB();

/*import express from "express"
const app = express()

//always use async await and try and catch while connection database

(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
       app.on("error", (error) => {
        console.log("ERR:", error);
        throw error
       })

       app.listen(process.env.PORT,() => {
        console.log(`APP is listening on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.log('ERROR:', error)
        throw err;
    }
})()*/