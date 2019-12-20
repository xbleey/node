const http = require("http");
const urlModel = require("url");

const server = http.createServer()

server.on('request', function (req, res) {
    const {pathname: url, query} = urlModel.parse(req.url, true)
    if (url === '/getJS') {
        var data = {
            id: 1,
            name: 'xbleey'
        }
        var script = `${query.callback}(${JSON.stringify(data)})`
        res.end(script)
    } else {
        res.end('404')
    }
})

server.listen(8000, function () {
    console.log('http://localhost:8000/getJS?callback=show')
})


function show(data) {
    console.log(data)
}