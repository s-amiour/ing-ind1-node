const db = require('./db');
const { createUser, getUsers } = require('./crud');

db.connect();
createUser('Git Tester');
console.log('Users in DB:', getUsers());