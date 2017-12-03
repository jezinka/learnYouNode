var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], (err, files) => {
    for (var i = 0; i < files.length; i++) {
        var extension = '.' + process.argv[3];
        if (path.extname(files[i]) == extension) {
            console.log(files[i]);
        }
    }
})