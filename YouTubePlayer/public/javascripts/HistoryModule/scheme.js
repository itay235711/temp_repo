const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    youTubeId: {
        type: String,
        unique: true,
    },
    name: {
        type: String
    }
}, { collection: 'History' });

const History = mongoose.model('History', historySchema);
module.exports =  History;
