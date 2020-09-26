const express = require('express');
const connec = require('./util/dataBase');
const bodyparser = require('body-parser');
const path = require('path');

 
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/loginRou');
const signData = require('./routes/sign-up');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(signData.routes);

connec.sync({force: true})
    .then(result => {       
    })
    .catch(err => {
        console.log('dint connect to the port')
});

app.listen(7000);
