
//http = require("http"),
//path = require("path"),
//url = require("url"),
//fs = require("fs");
var express = require('express');

var app = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/client.html');
});
app.get('bundle.js', function (req, res){
  res.sendFile(__dirname + '/public/bundle.js');

});

app.use(express.static('public'));

var server = app.listen(1234, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

var io = require('socket.io').listen(server);

io.on('connection', function (socket) {

	console.log('nouvelle connection');

	socket.on('message', function (msg) { 
		var signal = JSON.parse(msg);
		console.log(msg);
		switch(signal.type){
			case 'INVITE':
				socket.emit('message', JSON.stringify({"type":"100", "message":"trying"}));
			break;
		}

		socket.broadcast.emit('message', JSON.stringify(signal));
		

	});
	socket.on('disconnect', function () { });
});




//server.listen(1234);
console.log("\n\n--------------------------------------------------\n");
console.log("--------------------------------------------------\n");

console.log("__          ________ ____  _____ _______ _____ "); 
console.log("\\ \\        / /  ____|  _ \\|  __ \\__   __/ ____|");
console.log(" \\ \\  /\\  / /| |__  | |_) | |__) | | | | |     ");
console.log("  \\ \\/  \\/ / |  __| |  _ <|  _  /  | | | |     ");
console.log("   \\  /\\  /  | |____| |_) | | \\ \\  | | | |____ ");
console.log("    \\/  \\/   |______|____/|_|  \\_\\ |_|  \\_____|");
console.log("\n--------------------------------------------------\n");
console.log("--------------------------------------------------\n\n");
console.log("Server available...");  

