const config = require('./config');
module.exports = { 
    connect: () => console.log(`Connected to: ${config.dbString}`) 
};