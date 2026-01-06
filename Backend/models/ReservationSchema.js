import mongoose from "mongoose";
import validator from "validator";

const ReservationSchema=new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        trim:true,
        minlength:[2,"Name must be at least 2 characters long"],
        maxlength:[50,"Name must be at most 50 characters long"]   ,
    },
    lastName: {
        type:String,
        required:true,
        trim:true,
        minlength:2
    },
    email: {
        type:String,
        required:true,
        trim:true,
    },
    phone: {
        type:Number,
        required:true,
        trim:true,
    },
    date: {
        type:Date,
        required:true,
        trim:true
    },
    time: {
        type:String,
        required:true,
        trim:true
    },
    
});

export const Reservation=mongoose.model("Reservation",ReservationSchema);