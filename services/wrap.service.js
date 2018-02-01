require('seneca')()
  .use(require('./plugins/wrap'))
  .use('mesh', {
    isbase: false,
    pin: 'role:math'
  })