import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  roles: [String], // ['superadmin', 'admin', 'basic'] 
}, {
  timestamps: true,
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
