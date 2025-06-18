export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Menu from '@/lib/models/Menu';

// POST: Create a new menu item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectDB();
    const createdMenu = await Menu.create(body);
    return NextResponse.json({ message: "Menu created", menu: createdMenu }, { status: 201 });
  } catch (error: any) {
    console.error("POST Error:", error);
    return NextResponse.json({ message: "Failed to create menu", error: error.message }, { status: 500 });
  }
}

// GET: Retrieve all menu items
export async function GET() {
  try {
    await connectDB();
    const menus = await Menu.find();
    return NextResponse.json({ menus });
  } catch (error: any) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "Failed to retrieve menus", error: error.message }, { status: 500 });
  }
}
