import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: { type: String, trime: true, required: true },
    email: { type: String, trime: true, required: true },
    password: { type: String, trime: true, required: true },
  },
  { timestamps: true },
);
