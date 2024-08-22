
import dotenv from "dotenv"
import connectDB from "./db/index.js";
 

dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{

    console.log(`server is runing at Port: ${process.env.PORT}`);
  })
})


.catch((error)=>{
   console.log("mongoDb connection  failed ||", error)
})



// const app=express();
// ( async()=>{
//     try {
//       await mongoose.connect(`${process.env.mongoDBURI}/${db_name}`);
//       app.on("error", (error)=>{

//         console.log("error", error);
//         throw error
//       })

//       app.listen(process.env.PORT, ()=>{

//         console.log(`server listing on ${process.env.PORT}`)
//       })
        
//     } catch (error) {
//          console.error("error", error);
//          throw error
//     }
// }) ()