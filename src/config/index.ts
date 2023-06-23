const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || "";

(async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Database conectada :)')
    } catch (error) {
        console.error(error);
    }
})();

module.exports = mongoose;