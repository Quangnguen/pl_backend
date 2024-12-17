const jwt = require('jsonwebtoken')

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies
  if (!accessToken) {
    return res.status(409).json({ error: 'Access token not found' })
  } else {
    try {
      const decoded = await jwt.verify(accessToken, process.env.SECRET)
      req.id = decoded.id
      req.role = decoded.role
      next()
    } catch (error) {
      return res.status(409).json({ error: 'Invalid access token' })
    }
  }
}
