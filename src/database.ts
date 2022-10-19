import mongoose from "mongoose";


async function connect(){
    try{
       await mongoose.connect("mongodb://localhost/proyectoCeibo");
       console.log(">>> database connected");
       
    }
    catch{
         console.log("error")     
    }

}

export default connect