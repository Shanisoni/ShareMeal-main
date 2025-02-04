import { model, Schema } from 'mongoose';

const FoodSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    tags: { type: [String], default: [] },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, default: 3, min: 1, max: 5 },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: true },
    cookTime: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export const FoodModel = model('food', FoodSchema);
