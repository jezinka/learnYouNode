var module = require('./6-module');

var callback = function (err, data) {
    if (err) {
        console.log(err);
    }
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

module(process.argv[2], process.argv[3], callback);