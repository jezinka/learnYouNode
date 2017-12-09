var map = require('through2-map')
var http = require('http')
var url = require('url')


var server = http.createServer(function (req, res) {
    if (req.method == "GET") {
        var parsed_url = url.parse(req.url, true);
        var pathName = parsed_url.pathname;

        var json;
        var date = new Date(parsed_url.query.iso)

        if (pathName == '/api/parsetime') {
            json = JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            });
        } else if (pathName == '/api/unixtime') {
            json = JSON.stringify({ unixtime: date.getTime() })
        } else {
            res.writeHead(404)
            res.end()
        }

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(json)
    }
})
server.listen(process.argv[2])
