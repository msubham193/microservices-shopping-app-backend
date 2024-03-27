import express from "express";


import {PORT} from "./config/index"
import { dbConnection } from "./database";




const startServer =async ()=>{
    const app = express();

    await dbConnection();

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
  })
  .on('error', (err:string) => {
      console.log(err);
      process.exit();
  })
  .on('close', () => {
    
  })
}

startServer();