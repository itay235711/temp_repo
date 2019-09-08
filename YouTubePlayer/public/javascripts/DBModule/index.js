const mongoose = require('mongoose');

const connectDb = () => {
    return mongoose.connect('mongodb://localhost/youTube');
};

module.exports = connectDb();
