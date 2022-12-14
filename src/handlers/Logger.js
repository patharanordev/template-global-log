class Logger {
    constructor() {
        this.content = []
    }
    
    append(v) {
        this.content.push(v)
    }

    flush() {
        return this.content
    }
}

module.exports = Logger