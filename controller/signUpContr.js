const Custo = require('../util/dataBase');

exports.getSign = (req, res, next) => {
    res.render('login/sign-up');
};

exports.postSign = (req, res, next) => {

    const email = req.body.email;
    const confirmemail = req.body.confirmemail;
    const password = req.body.password;
    const confirmpassword = req.body.password;
    Custo.create({
        email,
        confirmemail,
        password,
        confirmpassword

    }).then(newOwner => {
        console.log('good')

    }).catch(err => {
        console.log(err)
    });

    // Custo.findOne({
    //         email: email
    //     })
    //     .then(user => {
    //         if (req.body.email == email) {
    //             console.log('clearer')
    //             req.flash('invalid email');
    //           }
    //     })
};
