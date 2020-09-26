const Custo = require('../util/dataBase');
const bcrypta = require('bcrypt');




exports.getLogin = (req, res, next) => {
    res.render('login/login');
};

exports.postLogin = (req, res, next) => {
    
         Custo.findOne({email: email})
         .then(user => {
             if(user){
                 console.log('clearer')
                  req.flash('invalid email');
                  return res.redirect('login/login');
             }
         })
};

