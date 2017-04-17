var http = require('http');
var request = require('request');

http.createServer(function(req, res) {
    //res.writeHead(200,{'Content-Type': 'text/html'});
    res.setHeader('Content-Type', 'text/html');
    request.post(
		{
			url:'http://ycchen.im.ncnu.edu.tw/join.php', 
			form: {
				Yuer: 'handsome'
			}
		}, function(err, httpResponse, body){
			res.write(body);
			res.end(); 
		}
	);
}).listen(7774);
