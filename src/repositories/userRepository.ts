/*
 ****************************************************************************************************************************
 * Filename    : userRepository
 * Description : Repository handles all direct database calls.
 * Author      : Elishree Dey Chand
 * Created     : 2026-05-26
 ****************************************************************************************************************************
 */

import User from '../models/userModel'

export class UserRepository {
  // CREATE USER e.g: POST /api/users with json data
  async createUser(data: any) {
    return User.create(data)
  }

  // GET ALL USERS
  async getUsers() {
    return User.findAll()
  }

  // GET USER BY ID e.g: GET /api/users/:id
  async getUserById(id: number) {
    return User.findByPk(id)
  }

  // UPDATE USER
  async updateUser(id: number, data: any) {
    return User.update(data, {
      where: { id },
    })
  }

  // DELETE USER
  async deleteUser(id: number) {
    return User.destroy({
      where: { id },
    })
  }
}
