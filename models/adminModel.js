const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'avatar.png',
  },
  role: {
    type: String,
    default: 'admin',
  },
})

module.exports = model('admins', adminSchema)
