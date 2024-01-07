const http = require('http');

const server = http.createServer(function(req, res) {
    res.write('SAGAR SETHI');
    res.end();
    
});

// Start the server and listen on port 4000
server.listen(4000);
