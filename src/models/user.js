// const mongoose = require('mongoose')
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
}, {
  timestamps: true,
})

const UserModel = mongoose.model('User', UserSchema)
// module.exports = UserModel
export default UserModel
