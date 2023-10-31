import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb"

export const POST = async (request) => {
    try {
        const body = await request.json()
        const {titulo, subtitulo1, subtitulo2, boton, imagen} = body

        const newSeccion = await prisma.post.create({
            
            data:{
                titulo,
                subtitulo1,
                subtitulo2,
                boton,
                imagen
            }
            
        })

        console.log(newSeccion)
        return NextResponse.json(newSeccion)
        
    } catch(err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

export const GET = async () => {
    try {
        const posts = await prisma.post.findMany()

        return NextResponse.json(posts)
    } catch(err) {
        return NextResponse.json({message: "GET Error"}, {status: 500})
    }
}