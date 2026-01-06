import {ErrorHandler} from "../error/error.js";
import { Reservation } from "../models/ReservationSchema.js";

export const sendReservation =async(req,res,next)=>
{
    const {firstName,lastName,email,phone,date,time}=req.body;  
    if(!firstName || !lastName || !email || !phone || !date || !time)
    {
        return next(new ErrorHandler("All fields are required",400));
    }
    try{
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
    }); 
        res.status(201).json({message:"Reservation sent successfully"});
    
    }
    catch(error)
    {
        if(error.name=='validationError')
        {
            const validationError=new ErrorHandler("Validation Error",400);
            validationError.errors=Object.values(error.errors).map((error)=>error.message);
            return next(validationError);
        }
        return next(error);
    }
}

export default sendReservation;


