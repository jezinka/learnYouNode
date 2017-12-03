var fs = require('fs');

var buf = fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  var fileLength = data.toString().split('\n').length - 1;
  console.log(fileLength);
});