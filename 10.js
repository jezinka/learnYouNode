var net = require('net')

var server = net.createServer(function (socket) {
    var date = new Date()
    data = "" + date.getFullYear() + '-' + padding(date.getMonth() + 1) + '-' + padding(date.getDate()) + ' '
        + padding(date.getHours()) + ':' + padding(date.getMinutes()) + '\n'
    socket.end(data)
})
server.listen(process.argv[2])

function padding(item) {
    if (item < 10) {
        return '0' + item
    }
    return item
}