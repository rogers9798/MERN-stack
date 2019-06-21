var express = require('express');
var path = require('path'); 
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();

var new_db = "mongodb://localhost:27017/sign-up";

app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

var getHash = ( pass , phone ) => {
				
    var hmac = crypto.createHmac('sha512', phone);
    
    //passing the data to be hashed
    data = hmac.update(pass);
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);
    return gen_hmac;
}
