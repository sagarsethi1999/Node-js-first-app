const Product = require('../models/product')
const fs = require('fs')
const path = require('path')


exports.getAddproduct=(req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    
  }

  exports.postAddproduct=(req, res, next) => {
    console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  }

  exports.getProducts =  (req, res, next) => {
     Product.fetchall((products => {
        // res.sendFile(path.join(__dirname,'..', 'views','shop.html'));
        // Read the HTML template file
        const htmlPath = path.join(__dirname, '..', 'views', 'shop.html');
        fs.readFile(htmlPath, 'utf8', (err, htmlTemplate) => {
            if (err) {
                console.error('Error reading HTML template:', err);
                return res.status(500).send('Internal Server Error');
            }

            // Replace a placeholder in the HTML template with product data
            const productListHTML = products.map(product => `<li>${product.title}</li>`).join('');
            const updatedHTML = htmlTemplate.replace('{{productList}}', productListHTML);

            // Send the updated HTML to the client
            res.send(updatedHTML);
        });
    }));
    
  }