import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Reservation } from '@/lib/models/Reservation';

// PATCH: Update a Reservation by ID
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const id = params.id;
    const updatedData = await req.json();

    const result = await Reservation.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      return NextResponse.json({ message: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update Reservation", error },
      { status: 500 }
    );
  }
};

// DELETE: Delete a Reservation by ID
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDB();
    const id = params.id;

    const result = await Reservation.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json({ message: "Reservation not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Reservation deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete Reservation", error },
      { status: 500 }
    );
  }
};
