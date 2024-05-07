import Post from '@/utils/models/userModel';
import dbConnect from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
    try {
        const posts = await Post.find({});
        return NextResponse.json({ data: posts });
    } catch (error) {
        console.error("GET Error:", error);
        return NextResponse.status(500).json({ error: error.message });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, comment, rating } = body;
        console.log("Received POST request with data:", name, comment, rating);
        
        await dbConnect();
        const post = await Post.create({ name, comment, rating });
        console.log("Saved post:", post);
        
        return NextResponse.json({ data: post });
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.status(500).json({ error: error.message });
    }
}
