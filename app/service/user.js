// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async getUsers() {
    const user = await this.app.mysql.query('select * from user');
    return user;
  }

  async find(uid) {
    const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    return user;
  }
}

module.exports = UserService;