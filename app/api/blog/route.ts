import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export async function POST(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  const Blogs = await Blog.create(body);
  return NextResponse.json(Blogs, { status: 201 });
}

// GET: Retrieve all Blog items
export async function GET() {
  try {
    await connectDB();
    const Blogs = await Blog.find();
    return NextResponse.json({ Blogs });
  } catch (error: any) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "Failed to retrieve Blogs", error: error.message }, { status: 500 });
  }
}
