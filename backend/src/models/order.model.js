import { model, Schema, Types } from 'mongoose';
import { OrderStatus } from '../constants/orderStatus.js';
import { FoodModel } from './food.model.js';

export const LatLngSchema = new Schema(
  {
    lat: { type: String, required: true },
    lng: { type: String, required: true },
  },
  {
    _id: false,
  }
);

export const OrderItemSchema = new Schema(
  {
    food: { type: Types.ObjectId, required: true, ref: 'Food' },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    _id: false,
  }
);

OrderItemSchema.pre('validate', async function (next) {
  try {
    const foodItem = await FoodModel.findById(this.food);
    if (!foodItem) {
      throw new Error('Food item not found');
    }
    this.price = foodItem.price * this.quantity;
    next();
  } catch (error) {
    next(error);
  }
});

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [OrderItemSchema], required: true },
    status: { type: String, default: OrderStatus.NEW },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
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

orderSchema.pre('validate', function (next) {
  this.totalPrice = this.items.reduce((acc, item) => acc + item.price, 0);
  next();
});

export const OrderModel = model('order', orderSchema);
