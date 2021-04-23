import Seed, { seedlist } from '../Classes/seed'
import Patch, { patchlist } from '../Classes/patch'
import Teleport, { teleportlist } from '../Classes/teleport'
import Location, { locationlist } from '../Classes/location'
import seeds from '../../../../assets/data/seeds'
import patches from '../../../../assets/data/patches'
import teleports from '../../../../assets/data/teleports'
import locations from '../../../../assets/data/locations'

const Generator = () => {
    console.log(`Generating ${seeds.length} seeds, ${patches.length} patches, ${teleports.length} teleports, ${locations.length} locations.`)

    seeds.forEach((seed) => {
        seedlist[seed.name] = new Seed(seed)
        seedlist[seed.name].getItemData()
    })
    //console.log(`Seeds Generated.`)

    patches.forEach((patch) => {
        patchlist[patch.id] = new Patch(patch);
        patchlist[patch.id].generateSeeds(seedlist)
    })
    //console.log('Patches Generated.')

    teleports.forEach((teleport) => {
        teleportlist[teleport.name] = new Teleport(teleport)
    })
    //console.log('Teleports Generated.')

    locations.forEach((location) => {
        locationlist[location.id] = new Location(location, patchlist)
    })
    //console.log('Locations Generated')
}

export default Generator
export { seedlist, patchlist, teleportlist, locationlist }