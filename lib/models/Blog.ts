import { Schema, model, models, Document } from "mongoose";

export interface IBlog extends Document {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  image: string;
  slug: string;
  tags?: string[];
  readTime?: string;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String },
  date: { type: String, required: true },
  author: { type: String, required: true },
  authorRole: { type: String },
  authorImage: { type: String },
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }],
  readTime: { type: String },
});

export const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);
