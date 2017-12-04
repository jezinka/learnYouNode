var http = require('http');
var collected_data = [];
var count = 0;

for (var i = 2; i < 5; i++) {
    make_get(process.argv[i], i)
}

function make_get(host, order) {
    http.get(host, function (res) {
        var response = ''
        res.setEncoding('utf8');
        res.on('data', (data) => {
            response += data;
        })
        res.on('error', console.error)
        res.on('end', () => {
            collected_data[order] = response;
            count++;
            if (count == 3) {
                collected_data.forEach(element => {
                    console.log(element)
                });
            }
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    })
}