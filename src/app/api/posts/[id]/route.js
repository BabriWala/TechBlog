
import Post from "@/src/models/Post";
import connection from "@/src/utilities/db"
import { NextResponse } from "next/server"

export const GET = async(req, {params}) =>{

    const {id} = params;
    try {
        await connection();

        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status: 200})

    } catch (error) {
        console.log(error)
         return new NextResponse("Databse Error", {status: 400})

    }

}