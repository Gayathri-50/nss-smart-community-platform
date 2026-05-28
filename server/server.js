const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

// Load environment variables before importing database helper
const envResult = dotenv.config({ path: path.resolve(__dirname, ".env") })
if (envResult.error) {
  console.error("Failed to load .env file:", envResult.error)
} else {
  console.log("Loaded .env file from:", path.resolve(__dirname, ".env"))
}
console.log("MONGO_URI present:", !!process.env.MONGO_URI)

const connectDB = require("./config/db")

const apiRoutes = require("./routes/apiRoutes")
const donorRoutes = require("./routes/donorRoutes")
const missingRoutes = require('./routes/missingRoutes')
const wasteRoutes = require('./routes/wasteRoutes')
const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware")

// Connect Database
connectDB()

// Initialize Express App
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api", apiRoutes)

app.use("/api/donors", donorRoutes)
app.use("/api/missing", missingRoutes)
app.use("/api/waste", wasteRoutes)
// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NSS Smart Community Platform API is running",
  })
})

// Error Middleware
app.use(notFound)
app.use(errorHandler)

// Port
const PORT = process.env.PORT || 5000

// Start Server
app.listen(PORT, () => {
  console.log(
    `Server running in ${
      process.env.NODE_ENV || "development"
    } mode on port ${PORT}`
  )
})