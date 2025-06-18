import { Schema, models, model, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
}

const CategorySchema: Schema = new Schema<ICategory>({
  name: { type: String },
});

const Category =
  models.Category || model<ICategory>("Category", CategorySchema);

export default Category;
