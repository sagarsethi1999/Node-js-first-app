const path = require('path')


exports.getContact = (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','views','contactus.html'));
    
  }

  exports.postContact =  (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  }

  exports.success = (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'views','success.html'));
  }