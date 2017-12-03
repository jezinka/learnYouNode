var http = require('http');
var collected_data = '';

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        collected_data += data;
    })
    res.on('error', console.error)
    res.on('end', () => {
        console.log(collected_data.length);
        console.log(collected_data);
    });
}).on('error', function (e) {
    console.log("Got error: " + e.message);
})