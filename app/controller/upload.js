'use strict';
const  fs = require('fs');
const path = require('path');

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async uploadFile() {
    const { ctx } = this;
    const fileReq = ctx.request.files[0];
    fs.unlink(fileReq.filepath, function(err) {
      if(err) console.log(err)
    });
    ctx.body = { code: 200, data: {id: Math.random()} }
  }
}

module.exports = UploadController;