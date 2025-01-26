const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Erro ao criar hash da senha: ' + error.message);
    }
}

const verifyPassword = (enteredPassword, storedHashedPassword) => {
    const isMatch = bcrypt.compare(enteredPassword, storedHashedPassword);
    return  isMatch;
}

module.exports = {hashPassword, verifyPassword};