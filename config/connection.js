// Connection to the Database 
var mysql = require('mysql');
var  connection;


if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);	
}
else {
	var connection = mysql.createConnection({
		port: 3306,
		host: 'iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'd8qkv39fpqcprj37',
		password: 'dsngxyrr1i40u8jg',
		database: 'a8j3dtjm6f710f6h'
	});
}

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});


module.exports = connection;