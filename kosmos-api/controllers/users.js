import { UserModel } from '../models/user.js';

export class UserController {

  static async getUsers(req, res) {
    const kosmos = await UserModel.getUsers();

    res.json({
      message: 'Users',
      kosmos: kosmos,
    });
  }

  static async createUser(req, res) {
    const kosmos = await UserModel.createUser(req.body);

    res.json({
      message: 'Post users',
      kosmos: kosmos?.id,
      success: Object.keys(kosmos).length > 0 ? true : false,
    });
  }

  static async updateUser(req, res) {
    const {response:kosmos, success} = await UserModel.updateUser(req.body);

    res.json({
      message: 'Patch users',
      kosmos: kosmos,
      success: success,
    })
  }

}