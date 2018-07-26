"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("commander");
var result = app
    .usage("[directory]")
    .version(require("../package.json").version)
    .parse(process.argv);
var dir = result.args[0];
var generate_1 = require("./generate");
generate_1.generateConfigsInPlace(dir ? require("path").join(process.cwd(), dir) : process.cwd());
