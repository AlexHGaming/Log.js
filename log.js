/**
 * @name Log.js
 * @description A logger that you can utilise within your projects
 * @author TinyDev
 * @license Apache-2.0
 */

var color = require("colors"),
    fs = require("fs")
    text = "";

module.exports.err = err;
module.exports.success = success;
module.exports.warn = warn;
module.exports.info = info;
module.exports.print = print;
module.exports.message = message;
module.exports.writeFile = writeFile;

function err(message) {
    console.log(Time() + "[" + "ERROR".red + "]", message.red);
};

function success(message) {
    console.log(Time() + "[" + "OK".green + "]", message.green);
};

function warn(message) {
    console.log(Time() + "[" + "WARNING".yellow + "]", message.yellow);
};

function info(message) {
    console.log(Time() + "[" + "INFO".blue + "]", message.blue);
};

function print(message) {
    console.log(Time() + "\b", message);
};

function message(message) {
    console.log(Time() + "[" + "MESSAGE".magenta + "]", message.magenta);
}

function writeFile(message) {

        text += message + "\n";

    if (!fs.existsSync("./log")) {
        err("./log doesn't exist!");
        success("Creating new ./log folder.")
        fs.mkdirSync("./log")
    } else {
            process.on('exit', () => {
        fs.writeFileSync("./log/log" + ".txt",Time() + text, 'utf-8');
    });

    }    

}

function Time() {
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds()
    return "[" + hour + ":" + minute + ":" + second + "] ";
}