"use strict";

/**
 * @name Log.js
 * @description A logger that you can utilise within your projects
 * @author FantasyIsBae
 * @license Apache-2.0
 */
const color = require("colors"),
    fs = require("fs"),
    request = require("request"),
    text = "",
    log = {
        err: function (message) {
            console.log(Time() + "[" + "ERROR".red + "]", message.red);
        },
        success: function (message) {
            console.log(Time() + "[" + "OK".green + "]", message.green);
        },
        warn: function (message) {
            console.log(Time() + "[" + "WARNING".yellow + "]", message.yellow);
        },
        info: function (message) {
            console.log(Time() + "[" + "INFO".blue + "]", message.blue);
        },
        logprint: function (message) {
            console.log(Time() + "\b", message);
        },
        message: function (url) {
            message = request(url, function (error, response, body) {
                console.log(Time() + "[" + "MESSAGE".magenta + "]", body);
            });
        },
        welcome: function () {
            if (fs.existsSync("./package.json" || "../package.json")) {
                var pjson = require("../../package.json");
                project_version = pjson.version;
                project_name = pjson.name;
                this.info("Welcome to " + project_name.rainbow.underline + " version ".blue + project_version.rainbow.underline);
            } else if (!fs.existsSync("./package.json" || "../package.json")) {
                throw new TypeError("Package.json not found within this project.")
            }
        },

        writeFile: function (message) {
            text += message + "\n";

            if (!fs.existsSync("./log")) {
                this.err("./log doesn't exist!");
                this.success("Creating new ./log folder.")
                if (fs.existsSync("./package.json" || "../package.json")) {
                    var pjson = require("./package.json" || "../package.json");
                    project_name = pjson.name;
                    this.info("Please run " + project_name + " again for your log to save");
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

    }

function Time() {
    var date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds()
    return "[" + hour + ":" + minute + ":" + second + "] ";
}

module.exports = log;