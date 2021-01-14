const throwError = (ctx) => {
  const num = Math.round((Math.random() * 100))
  if (num < 30) {
    ctx.status = 401
    ctx.body = { message: '服务器错误，请稍后再试' }
    return false
  }
  return true
}

module.exports = { 
  throwError
};