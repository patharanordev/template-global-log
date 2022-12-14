exports.initLogger = () => {
    global.log = typeof global.log === 'undefined'
    ? { 
        append:(...any) => console.log(any), 
        flush: () => console.log('global.log is not defined, using console.log instead.') 
    }
    : global.log
}