import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb"

export const GET = async (request, { params }) => {
    try{
        const { id } = params

        const post = await prisma.post.findUnique({
            where:{
                id
            }
        });

        if(!post) {
            return NextResponse.json(
                {message: "Seccion no encontrada", err},
                {status: 404}
            )
        }

        return NextResponse.json(post)
    } catch (err){
        return NextResponse.json({ message: "GET Error", err},
        {status: 404})
    }
}

export const PATCH = async (request, { params }) => {
    try{
        const body = await request.json()
        const { titulo, subtitulo1, subtitulo2, boton, imagen } = body;
        
        const { id } = params

        const updatePost = await prisma.post.update({
            where:{
                id
            },
            data: {
                titulo,
                subtitulo1,
                subtitulo2,
                boton,
                imagen
            }
        });

        if(!updatePost) {
            return NextResponse.json(
                {message: "Seccion no encontrada", err},
                {status: 500}
            )
        }

        return NextResponse.json(updatePost)
    } catch (err){
        return NextResponse.json({ message: "GET Error", err},
        {status: 404})
    }
}

export const DELETE = async (request, { params }) => {
    try{
        const { id } = params

        await prisma.post.delete({
            where:{
                id
            }
        });

        return NextResponse.json("La seccion ha sido eliminada")
    } catch (err){
        return NextResponse.json({ message: "GDELETE Error", err},
        {status: 500})
    }
}