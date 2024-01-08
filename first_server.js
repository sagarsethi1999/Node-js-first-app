const http = require('http');
const route = require('./route')
console.log(route.sometexts)



const server = http.createServer(route.handler);

server.listen(3000);












// const http = require('http');

// const server = http.createServer(function(req, res) {
//    const url =req.url;

//    if(url === '/home')
//    {
//     res.write('<html>')
//     res.write('<head><title>Enter Message</title><head>')
//     res.write('<body>WELCOME HOME</body>')
//     res.write('</html>')
//     return res.end();
//    }
//    if(url === '/about')
//    {
//     res.write('<html>')
//     res.write('<head><title>Enter Message</title><head>')
//     res.write('<body>WELCOME TO ABOUT US PAGE</body>')
//     res.write('</html>')
//     return res.end();
//    }
//    if(url === '/node')
//    {
//     res.write('<html>')
//     res.write('<head><title>Enter Message</title><head>')
//     res.write('<body>WELCOME TO MY NODE JS PROJECT</body>')
//     res.write('</html>')
//     return res.end();
//    }
//    res.write('<html>')
//     res.write('<head><title>Enter Message</title><head>')
//     res.write('<body>WELCOME TO MY NODE JS PROJECT </body>')
//     res.write('</html>')
//     res.end()
    
// });

// // Start the server and listen on port 4000
// server.listen(4000);
