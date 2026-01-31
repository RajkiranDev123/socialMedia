import mongoose from "mongoose";

export const databaseConnection=()=>{
    console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB Connected!")
    }).catch((error)=>{
        console.log(error)
    })
}