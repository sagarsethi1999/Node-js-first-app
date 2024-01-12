const path = require('path')
exports.getAddproduct=(req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    
  }

  exports.postAddproduct=(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  }

  exports.getProducts =  (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'views','shop.html'));
  }