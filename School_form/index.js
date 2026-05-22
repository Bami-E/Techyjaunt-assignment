const express = require ("express");
const morgan = require ("morgan");
const mongoose = require ("mongoose");
const dbConnection = require("./config/db")
const dotenv = require ("dotenv")
const studentRoutes = require("./routes/students.routes");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(morgan("dev"))

const dbURL = process.env.MONGODB_URL;

app.use("/api/students", studentRoutes)


app.listen(port, ()=>{
    dbConnection();
    console.log(`Server is running on ${port}`)
}

)