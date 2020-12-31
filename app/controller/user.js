'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUsers() {
    const { ctx } = this;
    const users = await ctx.service.user.getUsers()
    ctx.body = users;
  }
}

module.exports = UserController;
