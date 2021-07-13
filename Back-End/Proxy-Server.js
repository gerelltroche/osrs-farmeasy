const Express = require('express')
const { farmingLevel } = require('./PlayerLookup/PlayerLookup')
const express = Express()
const PORT = 4000


express.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

express.get('/:username', async (req, res) => {
    const { username } = req.params

    // const level = await FarmingLevel.farmingLevel(username)
    //     .then(level => res.json({level: level}))
    //     .catch(error => console.log(error))
    try {
        res.json({level: await farmingLevel(username)})
    } catch (err) {
        console.log(`Err: ${err}`)
    }

})

express.listen(PORT, () => console.log(`Listening on Port ${PORT}`))