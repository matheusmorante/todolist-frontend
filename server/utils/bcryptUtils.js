const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);
    return hashedPassword;
}

const verifyPassword = (enteredPassword, storedHashedPassword) => {
    const isMatch = bcrypt.compare(enteredPassword, storedHashedPassword);
    return  isMatch;
}

module.exports = {hashPassword, verifyPassword};