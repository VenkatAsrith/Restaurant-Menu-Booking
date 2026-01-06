import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err => {
            console.log('Database Error occured (Error Occured from the Db.js filr', err);

        }))
};

export default dbConnection;