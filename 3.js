var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var str_array = str.split('\n');

console.log(str_array.length - 1);