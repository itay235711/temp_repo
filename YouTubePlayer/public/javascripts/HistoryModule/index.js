const History = require("./scheme");

module.exports = class HistoryModule {

     async getHistory() {
        let history = await History.find({});
       return history;
    };

    async saveOne(id, name) {
        try {
            await History({
                youTubeId: id,
                name: name
            }).save();
        } catch(err){
            return (`failed to save ${id} to history, with error); ${err}`);
        }
    }

    async deleteOne(id) {
        return await History.deleteOne(
            {
                youTubeId: id,
            }
        );
    }
};
