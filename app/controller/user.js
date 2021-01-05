'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUsers() {
    const { ctx } = this;
    const users = await ctx.service.user.getUsers()
    ctx.body = users;
  }

  async patchUser() {
    const { ctx } = this
    const user = await ctx.service.user.patchUser(data)
    ctx.body = user;
  }
}

module.exports = UserController;
