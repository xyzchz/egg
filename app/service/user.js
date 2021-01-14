// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async getUsers() {
    const { limit, offset } = this.ctx.query
    const user = await this.app.mysql.select('user', {
      limit: Number(limit),
      offset: Number(offset)
    })
    const total = await this.app.mysql.query(`SELECT count(*) FROM user`)
    return {
      items: user,
      pageInfo: {
        pageSize: Number(limit),
        total: total[0]['count(*)'],
        page: (offset) / limit + 1
      }
    };
  }

  async patchUser(data) {
    const { userId, userName, age, sex } = data
    // const result = await this.app.mysql.query(`update user set
    //   userName='${userName}',
    //   age='${age}',
    //   sex='${sex}'
    //   where
    //   userId=${userId}
    // `);
    const result = await this.app.mysql.update('user', { userName, age, sex }, { where: { userId }});
    const updateSuccess = result.affectedRows === 1
    if (!updateSuccess) return { errorMesaage: '服务器错误' }
    const user = await this.app.mysql.get('user', { userId });
    return user;
  }

  async addUser(data) {
    const result = await this.app.mysql.insert('user', data);
    const updateSuccess = result.affectedRows === 1
    if (!updateSuccess) return { errorMesaage: '服务器错误' }
    const user = await this.app.mysql.get('user', { userId: result.insertId });
    return user;
  }

}

module.exports = UserService;