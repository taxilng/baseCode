'use strict'
class Logger {
    constructor() {
        // this.printName = this.printName.bind(this);
        this.printName = (name = 'there') => {
            this.print(`Hello ${name}`);
        };
    }
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const {
    printName
} = logger;
printName();