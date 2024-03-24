
import dotenv  from "dotenv";


if(process.env.NODE_ENV === 'production'){

    const configFile = `./.env.${process.env.NODE_ENV}`

    dotenv.config({path: configFile});

}
else{
    dotenv.config();
}


module.exports = {
    PORT: process.env.PORT,
    
}

