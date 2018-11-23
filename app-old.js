

const http = require('http');


http.createServer( (req,res) =>{

    res.writeHead(200, {'Content-type': 'application/json'});
    //res.write('Hola mundo');

    let output = {
        name: 'Fernando',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(output));
    res.end();
})
.listen(8080);

console.log("Listening on port 8080")