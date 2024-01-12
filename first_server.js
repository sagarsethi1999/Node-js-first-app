const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const errorController = require('./controllers/error')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')))


app.use('/admin', adminRoutes);
app.use(contactRoutes);
app.use(successRoutes)
app.use(shopRoutes);



app.use(errorController.get404Error);



app.listen(3000);













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
