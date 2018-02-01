module.exports = function math (options) {

  this.wrap('role:math,cmd:*', function (msg, respond) {
    console.log(`Wrapping math lib.`)
    msg.left  = Number(msg.left).valueOf()
    msg.right = Number(msg.right).valueOf()
    this.prior(msg, respond)
  })
}