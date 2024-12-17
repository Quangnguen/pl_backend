const jwt = require('jsonwebtoken')
const { create } = require('../models/adminModel')
const { dotenv } = require('dotenv')

module.exports.createToken = async (data) => {
  const token = await jwt.sign(data, process.env.SECRET, {
    expiresIn: '7d',
  })
  return token
}
