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
    const data = ctx.request.body
    const user = await ctx.service.user.patchUser(data)
    ctx.body = user;
  }

  async addUser() {
    const { ctx } = this
    const data = ctx.request.body
    const user = await ctx.service.user.addUser(data)
    ctx.body = user;
  }

  async errorTest() {
    const { ctx } = this
    // const user = await ctx.service.user.addUser(data)
    ctx.status = 401
    ctx.body = { message: 'error' }
  }
}

module.exports = UserController;
