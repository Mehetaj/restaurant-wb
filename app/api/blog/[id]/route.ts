import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

// PATCH: Update a Blog by ID
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const id = params.id;
    const updatedData = await req.json();

    const result = await Blog.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update Blog", error },
      { status: 500 }
    );
  }
};

// DELETE: Delete a Blog by ID
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const id = params.id;

    const result = await Blog.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete Blog", error },
      { status: 500 }
    );
  }
};
