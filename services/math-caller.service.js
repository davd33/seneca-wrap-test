require('seneca')()
  .use('mesh')
  .ready(function () {
    this.act('role:math,cmd:sum,left:2,right:2', (err, resp) => {
      if (err) console.log(err)

      console.log(JSON.stringify(resp, null, 2))
    })
  })