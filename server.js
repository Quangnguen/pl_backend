const express = require('express')
const app = express()

require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { dbConnect } = require('./utiles/db')
const authRoutes = require('./routes/authRoutes')
const categoryRoutes = require('./routes/dashboard/categoryRoutes')
const productRoutes = require('./routes/dashboard/productRoutes')
const sellerRoutes = require('./routes/dashboard/sellerRoutes')

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
)

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', sellerRoutes)
app.use('/api', require('./routes/home/customerAuthRoutes'))
app.use('/api', require('./routes/home/cartRoutes'))

app.use('/api/home', require('./routes/home/homeRoutes'))

const port = process.env.PORT || 5000
dbConnect()
app.listen(port, () => console.log(`Server is running on port ${port}`))
