/*
 ****************************************************************************************************************************
 * Filename    : userController
 * Description : Handles DB queries
 * Author      : Elishree Dey Chand
 * Created     : 2026-05-25
 ****************************************************************************************************************************
 */

// Import Express Types
import { Request, Response } from 'express'

// Import Sequelize User model
import User from '../models/userModel'

// CREATE USER
// POST /api/users
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, gender } = req.body

    const user = await User.create({
      name,
      email,
      phone,
      gender,
    })

    res.status(201).json(user)
  } catch (error: any) {
    console.log('CREATE USER ERROR:', error)

    res.status(500).json({
      message: 'Failed to create user',
      error: error.message,
      details: error.errors || null,
    })
  }
}

// GET ALL USERS
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll()

    res.status(200).json(users)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Failed to fetch users',
    })
  }
}

// GET USER BY ID
// GET /api/users/:id
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(Number(req.params.id))

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    res.status(200).json(user)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Failed to fetch user',
    })
  }
}

// UPDATE USER
export const updateUser = async (req: Request, res: Response) => {
  try {
    // Read updated data from request body
    const { name, email } = req.body

    // Find user by Primary Key (ID)
    const user = await User.findByPk(Number(req.params.id))

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    await user.update({
      name,
      email,
    })

    res.status(200).json(user)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Failed to update user',
    })
  }
}

// Delete user by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    // Find user using ID
    const user = await User.findByPk(Number(req.params.id))

    // If record not found
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    await user.destroy()

    res.status(200).json({
      message: 'User deleted successfully',
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Failed to delete user',
    })
  }
}