var http = require('http');

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        console.log(data);
    })
    res.on('error', console.error)
}).on('error', function (e) {
    console.log("Got error: " + e.message);
});