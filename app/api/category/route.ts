import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Category from '@/lib/models/Catalog';

export async function POST(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  const Categorys = await Category.create(body);
  return NextResponse.json(Categorys, { status: 201 });
}

// GET: Retrieve all Category items
export async function GET() {
  try {
    await connectDB();
    const Categorys = await Category.find();
    return NextResponse.json({ Categorys });
  } catch (error: any) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "Failed to retrieve Categorys", error: error.message }, { status: 500 });
  }
}
