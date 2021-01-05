// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async getUsers() {
    const user = await this.app.mysql.query('select * from user');
    return user;
  }

  async patchUser(data) {
    const { userId, userName, age, sex } = data
    const user = await this.app.mysql.query(`update user set
      userName=${userName},
      age=${age},
      sex=${sex}
      where
      userId=${userId}
    `);
    return user;
  }

  async find(uid) {
    const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    return user;
  }
}

module.exports = UserService;