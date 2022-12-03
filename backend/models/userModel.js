import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    municipality: { type: String, required: true },
    barangay: { type: String, required: true },
    validId: { type: String },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
