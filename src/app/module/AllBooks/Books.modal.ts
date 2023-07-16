import { Schema, model } from "mongoose";
import IBook from "./Books.interface";

// Mongoose schema for Book
const BookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    totalSale: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true },
    quantity: { type: Number, default: 0 },
    reviews: { type: [String], default: [] },
    img: { type: String, required: true },
    sellerID: { type: String, required: true },
  },
  {
    timestamps: true,
  }
  );
  
  // Mongoose model for Book
   export const BookModel = model<IBook>('Books', BookSchema);