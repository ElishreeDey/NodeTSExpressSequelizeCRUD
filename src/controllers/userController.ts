/*
 ****************************************************************************************************************************
 * Filename    : userController
 * Description : Handles User APIs
 * Author      : Elishree Dey Chand
 * Created     : 2026-05-25
 ****************************************************************************************************************************
 */

import { Request, Response } from 'express'
import { UserService } from '../services/userService'

import { MESSAGES } from '../constants/messages'

const userService = new UserService()

// CREATE USER
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body)

    res.status(201).json(user)
  } catch (error: any) {
    console.log('CREATE USER ERROR:', error)

    res.status(500).json({
      message: MESSAGES.USER_CREATE_FAILED_MSG,
      error: error.message,
      details: error.errors || null,
    })
  }
}

// GET USERS
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers()

    res.status(200).json(users)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: MESSAGES.USER_FETCH_FAILED_MSG,
    })
  }
}

// GET USER BY ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(Number(req.params.id))

    if (!user) {
      return res.status(404).json({
        message: MESSAGES.USER_FETCH_SINGLE_FAILED_MSG,
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
    const user = await userService.updateUser(Number(req.params.id), req.body)

    if (!user) {
      return res.status(404).json({
        message: MESSAGES.USER_NOT_FOUND_MSG,
      })
    }

    res.status(200).json(user)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: MESSAGES.USER_UPDATE_FAILED_MSG,
    })
  }
}

// DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await userService.deleteUser(Number(req.params.id))

    if (!deleted) {
      return res.status(404).json({
        message: MESSAGES.USER_NOT_FOUND_MSG,
      })
    }

    res.status(200).json({
      message: MESSAGES.USER_DELETE_SUCCESS_MSG,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: MESSAGES.USER_DELETE_FAILED_MSG,
    })
  }
}