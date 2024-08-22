import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB= async () => {
    try {

        const connectionDB = await mongoose.connect( `${process.env.mongoDBURI}/${db_name}`);
        console.log(`mogoDB connect DB host : ${connectionDB.connection.host}`)
        
    } catch (error) {
        console.log("mongodb  connection error", error); 
        process.exit(1)
    }
}

  
export default connectDB