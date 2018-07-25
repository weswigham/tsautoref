import * as ts from "typescript"
import globby = require("globby");
import path from "path";
import fs from "fs";
const { readFile } = fs.promises;
export async function generateConfigsInPlace(targetDir: string) {
    const packageFiles = await globby([path.join(targetDir, "**/package.json")])
    console.log(packageFiles);
}