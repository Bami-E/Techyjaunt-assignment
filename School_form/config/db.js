const mongoose = require ("mongoose");
const dotenv = require ("dotenv")
dotenv.config();

const dbURL = process.env.MONGODB_URL;
const dbConnection = async ()=>{
    try{
    await mongoose.connect(dbURL)
    console.log("Connected to Database")

    } catch(error){
        console.error("Error connecting to the database", error)
        process.exit(1);
    }
}

module.exports = dbConnection;