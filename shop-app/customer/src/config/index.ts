
import dotenv  from "dotenv";


if(process.env.NODE_ENV === 'production'){

    const configFile = `./.env.${process.env.NODE_ENV}`

    dotenv.config({path: configFile});

}
else{
    dotenv.config();
}


export const PORT = process.env.PORT;
export const DB_URL = process.env.DATABASE_URL;
export const APP_SECRET = process.env.APP_SECRET;

