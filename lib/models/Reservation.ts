import { Schema, model, Document } from 'mongoose';

// Define interface for the Reservation document
interface IReservation extends Document {
  date: Date;
  time: string;
  guests: number;
  experience: string;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Mongoose schema
const reservationSchema = new Schema<IReservation>(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
      enum: [
        '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30', '21:00', '21:30', '22:00',
      ],
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    experience: {
      type: String,
      required: true,
      enum: ['standard', 'chef-table', 'tasting-menu', 'private-pod'],
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\+?[\d\s-]{10,}$/, 'Please enter a valid phone number'],
    },
    specialRequests: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true, 
  }
);

// Create and export the Mongoose model
export const Reservation = model<IReservation>('Reservation', reservationSchema);