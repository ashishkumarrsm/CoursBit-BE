import dotenv from "dotenv";
import chalk  from "chalk";
dotenv.config()

if(! process.env.MONGODBURL){
    throw new Error((chalk.red` MONGODBURL is not exist in the envirmant variable `))
}
if(! process.env.JWT_SECRET){
    throw new Error((chalk.red` JWT_SECRET is not exist in the envirmant variable `))
}


const config= {
    MONGODBURL: process.env.MONGODBURL,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config