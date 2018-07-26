import app = require("commander");

const result = app
    .usage("[directory]")
    .version(require("../package.json").version)
    .parse(process.argv);

const dir = result.args[0];

import { generateConfigsInPlace } from "./generate";
generateConfigsInPlace(dir ? require("path").join(process.cwd(), dir) : process.cwd());
