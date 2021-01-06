// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async getUsers() {
    const user = await this.app.mysql.query('select * from user');
    return user;
  }

  async patchUser(data) {
    const { userId, userName, age, sex } = data
    const result = await this.app.mysql.query(`update user set
      userName='${userName}',
      age='${age}',
      sex='${sex}'
      where
      userId=${userId}
    `);
    const updateSuccess = result.affectedRows === 1
    if (!updateSuccess) return { errorMesaage: '服务器错误' }
    const user = await this.app.mysql.get('user', { userId });
    return user;
  }

  async addUser(data) {
    const { userId, userName, age, sex } = data
    const result = await this.app.mysql.query(`INSERT INTO user (userName, age, sex) VALUES ('${userName}', '${age}', '${sex}')`);
    const updateSuccess = result.affectedRows === 1
    return result
    // if (!updateSuccess) return { errorMesaage: '服务器错误' }
    // const user = await this.app.mysql.get('user', { userId });
    // return user;
  }

}

module.exports = UserService;