/* Import Express */
import express from 'express'

import {
  createUser, // Create new user
  getUsers, // Get all users
  getUserById, // Get single user by ID
  updateUser, // Update existing user
  deleteUser, // Delete user
} from '../controllers/userController'

/* Create Express Router it helps separate routes from main app file*/
const router = express.Router()

/* Create a new user */
router.post('/users', createUser)

/* Fetch all users using ID */
router.get('/users', getUsers)

// Fetch single user using ID
router.get('/users/:id', getUserById)

//Update single user using ID
router.put('/users/:id', updateUser)

//Delete single user using ID
router.delete('/users/:id', deleteUser)

export default router
