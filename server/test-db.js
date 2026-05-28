// Simple DB connection tester
require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

if (!uri) {
  console.error('MONGO_URI is not set in .env')
  process.exit(1)
}

console.log('Attempting to connect to MongoDB...')

mongoose.set('strictQuery', false)

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => {
    console.log('MongoDB connection successful')
    console.log('Host:', conn.connection.host)
    return mongoose.disconnect()
  })
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('MongoDB connection error:')
    console.error(err && err.message ? err.message : err)
    if (err && err.stack) console.error(err.stack)
    process.exit(1)
  })
