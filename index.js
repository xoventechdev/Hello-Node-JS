var http = require('http');
var url = require('url');

http.createServer(function(req, res) {

    const weburl = 'https://www.facebook.com/groups/1013044613268884';

    // PathName 1
    const parseUrl = url.parse(weburl);
    const pathname = parseUrl.pathname;

    // PathName 2
    const pathName = url.parse(weburl).pathname;


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`PathName 1 : ${pathname} <br> PathName 2 : ${pathName}`);

}).listen(8888);

