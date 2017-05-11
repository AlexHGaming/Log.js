/**
 * @name Log.js
 * @description A logger that you can utilise within your projects
 * @author TinyDev
 * @license Apache-2.0
 */

var color = require("colors"),
    fs = require("fs"),
    request = require("request"),
    text = "";

module.exports.err = err;
module.exports.success = success;
module.exports.warn = warn;
module.exports.info = info;
module.exports.print = logprint;
module.exports.message = message;
module.exports.writeFile = writeFile;
module.exports.welcome = welcome;

function err(message) {
    console.log(Time() + "[" + "ERROR".red + "]", message.red);
}

function success(message) {
    console.log(Time() + "[" + "OK".green + "]", message.green);
}

function warn(message) {
    console.log(Time() + "[" + "WARNING".yellow + "]", message.yellow);
}

function info(message) {
    console.log(Time() + "[" + "INFO".blue + "]", message.blue);
}

function logprint(message) {
    console.log(Time() + "\b", message);
}

function message(url) {
    message = request(url, function (error, response, body) {
        console.log(Time() + "[" + "MESSAGE".magenta + "]", body);
    });
}

function welcome() {
    if (fs.existsSync("./package.json" || "../package.json")) {
        var pjson = require("../../package.json");
        project_version = pjson.version;
        project_name = pjson.name;
        this.info("Welcome to " + project_name.rainbow.underline + " version ".blue + project_version.rainbow.underline);
    } else if (!fs.existsSync("./package.json" || "../package.json")) {
        this.err("Package.json not found!")
        process.exit();
    }
}


function writeFile(message) {
    text += message + "\n";

    if (!fs.existsSync("./log")) {
        this.err("./log doesn't exist!");
        this.success("Creating new ./log folder.")
        if (fs.existsSync("./package.json" || "../package.json")) {
            var pjson = require("./package.json" || "../package.json");
            project_name = pjson.name;
            this.info("Please run " + project_name + " again for your log to save");
        } else if (!fs.existsSync("./package.json" || "../package.json")) {
            this.err("Package.json not found!")
            process.exit();
        } else {
            this.info("Please run your project again for your log to save");
        }
        fs.mkdirSync("./log")
    } else {
        process.on('exit', () => {
            fs.writeFileSync("./log/log.txt", Time() + text, 'utf-8');
        });
    }
}

function Time() {
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
    return "[" + hour + ":" + minute + ":" + second + "] ";
}
