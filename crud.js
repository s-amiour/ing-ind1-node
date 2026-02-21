let users = []; // minimal model
const createUser = (name) => users.push(name); // Function 1
const getUsers = () => users;                  // Function 2

module.exports = { createUser, getUsers };