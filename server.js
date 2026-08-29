import dotenv from "dotenv";
// import "dotenv/config";
import app from "./src/index.js";
import connectDB from "./src/config/db.js";
import chalk from "chalk";
dotenv.config();
const PORT= process.env.PORT;
// ! check is port exist or not 
if(! process.env.PORT){
    throw new Error((chalk.red` PORT is not exist in the envirmant variable `))
}
// *===========. connection to database ================
connectDB()

const server = app.listen(PORT, () => {
  console.log(
    chalk.bgCyan(
      `The server is running on http://localhost:${PORT} `
    )
  );
});

server.on("error", (error) => {
  console.error(error);
});
