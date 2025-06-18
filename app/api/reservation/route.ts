import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Reservation } from '@/lib/models/Reservation';

export async function POST(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  const Reservations = await Reservation.create(body);
  return NextResponse.json(Reservations, { status: 201 });
}

// GET: Retrieve all Reservation items
export async function GET() {
  try {
    await connectDB();
    const Reservations = await Reservation.find();
    return NextResponse.json({ Reservations });
  } catch (error: any) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "Failed to retrieve Reservations", error: error.message }, { status: 500 });
  }
}
