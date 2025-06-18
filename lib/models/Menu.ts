import mongoose, { Document, Schema, Model } from 'mongoose';

// 1. Interface for TypeScript
export interface IMenuItem extends Document {
  name: string;
  description?: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage';
  image?: string;
  isAvailable: boolean;
  isSpecial: boolean;
  isVegan: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Schema definition
const menuItemSchema = new Schema<IMenuItem>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['appetizer', 'main', 'dessert', 'beverage'],
    },
    image: {
      type: String,
      default: '',
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isSpecial: {
      type: Boolean,
      default: false,
    },
    isVegan: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Menu: Model<IMenuItem> = mongoose.models.Menu || mongoose.model<IMenuItem>('Menu', menuItemSchema);
export default Menu;
