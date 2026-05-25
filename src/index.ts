/*
 ****************************************************************************************************************************
 * Filename    : index
 * Description : Application starting point
 * Author      : Elishree Dey Chand
 * Created     : 2026-05-25
 ****************************************************************************************************************************
 */

/* Import Required Packages */
import express from 'express' // Express framework used to create backend server and APIs
import cors from 'cors' // Allows frontend apps to access backend APIs
import dotenv from 'dotenv' // Reads environment variables from .env file
import helmet from 'helmet' // Adds security headers to protect Express app

/* Import Project Files */
import sequelize from './config/db' // Sequelize database connection setup
import userRoutes from './routes/userRoutes' // User CRUD route

// config .env values
dotenv.config()

// Create Express server instance
const app = express()

// Helmet Security Middleware. Protects app using secure HTTP headers
app.use(helmet())

// CORS Middleware
app.use(cors())

// Converts incoming JSON request body into JS object. Required for POST and PUT APIs
app.use(express.json())

// Mount routes with /api prefix
app.use('/api', userRoutes)

// Read port from .env if not available use default 3000
const PORT = process.env.PORT || 3000

// Sync Sequelize models with PostgreSQL Database Connection. Creates tables automatically if missing
sequelize
  .sync()
  .then(() => {
    console.log('Database connected successfully')

    // Start Express server after DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((error) => {
    // Handle DB connection/sync errors
    console.log(error)
  })