const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

mongoose.connection.on("connected", () => {
  console.log("Mongoose event: connected to MongoDB")
})

mongoose.connection.on("error", (err) => {
  console.error("Mongoose event: connection error", err && err.message ? err.message : err)
})

mongoose.connection.on("disconnected", () => {
  console.warn("Mongoose event: disconnected from MongoDB")
})

const connectDB = async () => {
  const uri = process.env.MONGO_URI

  if (!uri) {
    console.error("MongoDB connection error: MONGO_URI is not set in .env")
    // Do not exit here to keep the server running during local development.
    return
  }

  try {
    const conn = await mongoose.connect(uri)

    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("MongoDB connection error:", error.message)
    if (error.stack) {
      console.error(error.stack)
    }
    console.error(
      "Common Atlas issues: IP whitelist, invalid credentials, network/DNS, or cluster paused."
    )
    return
  }
}

module.exports = connectDB