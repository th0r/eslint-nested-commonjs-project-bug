// Invalid error as this is a CommonJS module (uses `package.json` from current directory with `type: "commonjs"`)
const path = require("path");

console.log(path);
console.log('Module works!');
