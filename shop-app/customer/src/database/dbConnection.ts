import mongoose from "mongoose"
import { DB_URL } from "../config"

export default async () => {

    try{
        
        if (!DB_URL) {
            throw new Error('Database URL is undefined or null');
        }
        await mongoose.connect(DB_URL);
        
        console.log("Database connection established");

    }
    catch(error){

        console.error('Error ============ ON DB Connection');
        console.error(error);

    }
    
}


