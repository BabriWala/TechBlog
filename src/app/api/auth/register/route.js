import User from "@/src/models/user";
import { connect } from "mongoose";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import connection from "@/src/utilities/db";

export const POST = async(request)=>{
    // // console.log(request.json())
    // console.log(request)
    // console.log("i am in post")
    console.log("I am ok")
    // const {fullName, email, password, image} = await request.json();
    console.log("I am ok")
    // console.log(fullName, email, password, image);
    await connection();

    // const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {name: "hanzala"}
    try{
        await newUser.save();
        return new NextResponse("user Has been created", {
            status: 201
        })
    }catch(err){
        console.log(err)
    }
}

