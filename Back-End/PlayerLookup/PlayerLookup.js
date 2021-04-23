const axios = require('axios');

const farmingLevel = async (username) => {
    let BASE_URL = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=';

    const constructUrl = () => {
        return BASE_URL + username.replace(/\s/g, '%20')
    }

    try {
        console.log(`${username} requested`)
        const response = await axios.get(constructUrl())
        const data = await response.data;
        const levels = data.split(',');
        return levels[41]
    }
    catch(err) {
        throw Error(err)
    }
}

module.exports = {
    farmingLevel: farmingLevel
};