// const http = require('http');
// const route = require('./route')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name="size"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
// const server = http.createServer(route.handler);
// const server = http.createServer(app);
// server.listen(3000);













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
