const { initLogger } = require('./utils')
initLogger()

exports.test = () => {
    global.log.append('test1')
}