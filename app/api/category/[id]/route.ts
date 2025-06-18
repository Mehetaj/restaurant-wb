import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Category from '@/lib/models/Catalog';

// PATCH: Update a Category by ID
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const id = params.id;
    const updatedData = await req.json();

    const result = await Category.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update category", error },
      { status: 500 }
    );
  }
};

// DELETE: Delete a Category by ID
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const id = params.id;

    const result = await Category.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Category deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete category", error },
      { status: 500 }
    );
  }
};
