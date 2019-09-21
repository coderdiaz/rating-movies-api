import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
}, {
  timestamps: true,
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
