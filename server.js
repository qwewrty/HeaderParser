var express = require("express")
var app = express();

//For getting the port number.
app.set('port', (process.env.PORT || 5000))

//To get the request.
app.get('/', function(req, res){
    
    var obj = {
        //The ip address.
        ipaddress : req.headers['x-forwarded-for'],
        //Print just the language, omit other stuff...
        language : req.headers['accept-language'].split(',')[0],
        //Printing just the required part again.
        software : req.headers['user-agent'].split('(')[1].split(')')[0]
    }
    //Send the object as response.
    res.send(JSON.stringify(obj))
});

//Start listening.
app.listen(app.get('port'), function(){
    console.log("Listening on port "+app.get("port"))
})