// Import Required Packages
import { Sequelize } from 'sequelize' // Sequelize ORM package
import dotenv from 'dotenv' // Loads .env variables

dotenv.config()

// Create Sequelize Database Connection
// Create Sequelize instance
const sequelize = new Sequelize(
  // Database name
  process.env.DB_NAME || '',

  // Database username
  process.env.DB_USER || '',

  // Database password
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: Number(process.env.DB_PORT),
    logging: false,
  }
)

// Environment Variable Validation
if (
  !process.env.DB_HOST ||
  !process.env.DB_PORT ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  throw new Error(
    'Missing required database environment variables. ' +
      'Please set DB_HOST, DB_PORT, DB_USER, DB_PASSWORD and DB_NAME in your .env file.'
  )
}

//Export Sequelize Instance
export default sequelize
