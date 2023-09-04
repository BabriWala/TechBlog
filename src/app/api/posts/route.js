
import Post from "@/src/models/Post";
import connection from "@/src/utilities/db"
import { NextResponse } from "next/server"

export const GET = async(req) =>{
    // console.log(req)

    try {
        await connection();

        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status: 200})

    } catch (error) {
        console.log(error)
         return new NextResponse("Databse Error", {status: 400})

    }

}