module.exports = function (folder, ext, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(folder, (err, files) => {
        if (err) {
            return callback(err)
        }
        var file_names = [];
        for (var i = 0; i < files.length; i++) {
            var extension = '.' + ext;
            if (path.extname(files[i]) == extension) {
                file_names.push(files[i]);
            }
        }
        return callback(null, file_names);
    })
}

