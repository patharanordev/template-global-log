const Logger = require('./Logger')

global.log = new Logger()

const t1 = require('./test1')
const t2 = require('./test2')

t1.test()
t2.test()

console.log(global.log.flush())