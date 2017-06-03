var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    var query = url.parse(req.url, true).query;
    sendPromise(query.url, query.path, (data) => {
    	res.write(query.callback + '({"msg" : ' + data + '})');
    	res.end();
    })    
}).listen(3000,'120.25.166.237');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url, true).pathname;
    pathname == '/' ? pathname = '/index.html' : 1;
    var type = path.extname(pathname).slice(1);
    fs.readFile('../dist' + pathname, function(err, file){
        if(err){
            console.log(err)
        }else{
            res.writeHead(200, {'Content-Type': mime[type]});
            res.end(file); 
        }        
    })
}).listen(80,'120.25.166.237');


function sendPromise(url, path, cb){
	var options = {
	  hostname: url,
	  path: path,
	};
	var req = http.request(options, function(res) {  
		var html = ''
		res.setEncoding('utf8');
        res.on('data',function(body){  
            html += body
        }).on("end", function () {  
        	cb(html);
        });  
    })
    req.on('error', function(e) {  
        console.log("Got error: " + e.message);  
    });  
    req.end();
}

var mime = {  
    "html" : "text/html",  
    "css"  : "text/css",  
    "js"   : "text/javascript",  
    "json" : "application/json",  
    "ico"  : "image/x-icon",  
    "gif"  : "image/gif",  
    "jpeg" : "image/jpeg",  
    "jpg"  : "image/jpeg",  
    "png"  : "image/png",  
    "pdf"  : "application/pdf",  
    "svg"  : "image/svg+xml",  
    "swf"  : "application/x-shockwave-flash",  
    "tiff" : "image/tiff",  
    "txt"  : "text/plain",  
    "wav"  : "audio/x-wav",  
    "wma"  : "audio/x-ms-wma",  
    "wmv"  : "video/x-ms-wmv",  
    "xml"  : "text/xml"  
};