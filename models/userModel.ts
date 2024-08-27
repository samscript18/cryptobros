import mongoose from 'mongoose';

interface User {
  email: string;
  password: string;
  userName: string;
  name: string;
}

const userSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
});

export const userModel = mongoose.model('User', userSchema);
