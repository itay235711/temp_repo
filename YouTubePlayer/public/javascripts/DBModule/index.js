const mongoose = require('mongoose');

module.exports = class DBModule {
    async connectDb(dbUrl) {
        return await mongoose.connect(dbUrl);
    }
};

