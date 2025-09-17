// server.js
// this is the server file for the foodmunch app
import express from 'express'
import cors from 'cors' // Import cors
import dotenv from 'dotenv' // For environment variables
import connectDB from './config/db.js' // Import DB connection
import authRoutes from './routes/auth.js' // Import auth routes
import { notFound, errorHandler } from './middleware/errorMiddleware.js' // Import error middleware
import { protect } from './middleware/authMiddleware.js' // Import auth middleware

dotenv.config() // Load environment variables

connectDB() // Connect to database

const app = express()
const port = process.env.PORT || 5173 // Use environment port or default

// Middleware
app.use(cors()) // Enable CORS
app.use(express.json()) // Enable JSON body parsing

// Mount auth routes
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from your professional API!', timestamp: new Date() })
})

// Protected example route
app.get('/api/protected', protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}, you have access to protected data!`, user: req.user })
})

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server has started on  ${port}`)
})
