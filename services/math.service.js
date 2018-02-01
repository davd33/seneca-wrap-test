require('seneca')()
  .use(require('./plugins/math'))
  .use('mesh', {
    isbase: true,
    pin: 'role:math'
  })