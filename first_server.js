

const http = require('http');
const fs = require('fs');
const path=require('path')

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    const filepath = path.join(__dirname, 'message.txt')

    fs.readFile(filepath, { encoding: "utf-8"}, (err, data) => {
      if(err){
        console.log(err)
      }
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write(`<body>${data}</body>`)
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
      res.write('</html>');
      return res.end();
    } )
   
  }
 else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        if(err){
          console.log(err)
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
   else{
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();

   } 
});

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
