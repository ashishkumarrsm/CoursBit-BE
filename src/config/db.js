
import mongoose, { connect } from "mongoose"
import config from "./config.js"
import chalk from "chalk"




const connectDB =async ()=>{
    await mongoose.connect(config.MONGODBURL)
    console.log(chalk.bgGreen(`The server is connect to the database sucessfully `))
}

export default connectDB;