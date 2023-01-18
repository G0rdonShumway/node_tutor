require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const verifyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const credentials = require('./middleware/credentials')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnection')
const PORT = process.env.PORT || 3500

mongoose.set('strictQuery', true);
connectDB()
app.use(logger)

app.use(credentials)

app.use(cors(corsOptions)) //Cross Origin Resourse Sharing

app.use(express.urlencoded({ extended: false }))

// middleware for json
app.use(express.json())

// midware for cookies
app.use(cookieParser())

// serve static files
app.use('/', express.static(path.join(__dirname, 'public')))

// routes
app.use('/authorization', require('./routes/authorization'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))

app.use('/', require('./routes/root'))
app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'))

app.all('/*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ error: "404 Not Found" })
  } else {
    res.type('txt').send("404 Not Found")
  }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
  console.log('Connected to DB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})