const { farmingLevel } = require('./playerlookup');


class Player {
    constructor( username, quests ) {
        //he be a leet boy
        this.username = username;
        this.quests = quests;
        this.level = null;
    }

    async init(){
        await this.getLevel();
    }

    async getLevel() {
        const response = await farmingLevel(this.username);
        this.level = response;
        return response;
    }

}

module.exports = {
    Player: Player
}