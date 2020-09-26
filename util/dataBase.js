const Sequelize = require('sequelize');
const data = require('../dataPlace/data');

const db = new Sequelize ('booktest', 'root', 'arthur', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
    .then(() => {
        console.log('the connection is good');
    })
    .catch(err => {
        console.log('an error occured in the process')
});


const Customer = db.define("Custimer", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        confirmemail: {
             type: Sequelize.STRING
         },
        password: {
            type: Sequelize.STRING
        },
        confirmpassword: {
             type: Sequelize.STRING
         },
});

// const Order = db.define("foodType", {    
//     Soup: {
//         type: Sequelize.STRING
//     },
//     Swallow: {
//         type: Sequelize.STRING
//     },
//     Meat: {
//         type: Sequelize.STRING
//     }
// });

// const newData = data.map((item) => {
//     return {
//         email: item[0],
//         name: item[1],
//         phone: item[2]
//     }
// });

// Customer.bulkCreate(newData)
//     .then(newOwner => {
//         console.log('happne')
//     })
//     .catch(err => {
//         console.log('an error occured in the process', err)
// });

module.exports = db;
module.exports = Customer;

