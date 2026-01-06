import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/Db.js";
import {errorMiddleware} from "./error/error.js";
import  router from "./routes/Reservation.js";

const app=express();
dotenv.config();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// app.options("*", cors());

dbConnection();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api/reservation",router);


app.use(errorMiddleware);

export default app;