import ITEMS_DICTIONARY from '../../../assets/data/filtereditems.json'
import { patchlist, seedlist } from './Generator/Generator'

const InventoryGenerator = (level, setInventory) => {
    let filteredpatches = []

    const idlookup = (itemname) => {
        for (let num in ITEMS_DICTIONARY) {
            if (itemname.toUpperCase() === ITEMS_DICTIONARY[num].name.toUpperCase()) {
                return ITEMS_DICTIONARY[num].id
            }
        }
    }

    const imglookup = (itemname) => {
        let image = `/itemimages/${itemname}.png`
        return image
    }

    const sortbyName = (items) => {
        items.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        })
    }

    const stackItems = (items) => {
        let returninv = []
        let previousitem = {}
        let index = 0

        sortbyName(items);

        //checks each item to the previous one to stack.
        const itemstopush = formatItems(items)
        itemstopush.forEach((item) => {

            //console.log (`checking ${previousitem.name} == undefined`)
            if (previousitem.name === undefined) {
                returninv.push(item)
                previousitem = item;
            }
            //console.log(`checking ${item.name} = ${item.name} && ${item.stackable}`)
            if (item.name === previousitem.name && item.stackable) {
                returninv[index].amount += item.amount
            }
            //console.log(`checking ${item.name} != ${previousitem.name} || ${itemtopush.stackable}`)
            if (item.name !== previousitem.name || !previousitem.stackable ) {
                returninv.push(item)
                previousitem = item
                index += 1;
            }
        })
        return returninv
    }

    const filterPatches = () => {
        //needs work
        for (const patch in patchlist) {
            filteredpatches.push(patchlist[patch])
        }
    }

    const formatItems = (items) => items.map((item) => {
            return {
                'name': item.name,
                'amount': item.amount,
                'image': imglookup(idlookup(item.name)),
                'stackable': item.doesStack
            }
    })

    const pushSeeds = () => {
        let itemstopush =[]
        filterPatches()
        filteredpatches.forEach(patch => {
            itemstopush.push(patch.maxseed(level, seedlist))
        })
        return itemstopush
    }

    const pushTools = (options) => {
        let itemstopush = []

        if (options.match(/(allotment)|(flower)|(herb)|(hop)/)) {
            itemstopush.push(
                {name: 'rake', amount: 1, doesStack: false},
                {name: 'seed dibber', amount: 1, doesStack: false},
                {name: 'spade', amount: 1, doesStack: false},
                {name: 'magic secateurs', amount: 1, doesStack: false},
                {name: 'compost', amount: 1, doesStack: false},
                {name: 'axe', amount: 1, doesStack: false},
            )
        }

        if (options.match(/(tree)/)) {
            itemstopush.push(
                {name: 'spade', amount: 1, doesStack: false},
                {name: 'axe', amount: 1, doesStack: false},
                {name: 'coins', amount: 1, doesStack: false},
            )
        }
        return formatItems(itemstopush)
    }

    const pushTeleports = (options) => {
        console.log(options)
        let itemstopush = []

        itemstopush.push(
            {name: 'Explorer\'s Ring 2+', amount: 1, doesStack: false},
            {name: 'Ardougne Cloak 2+', amount: 1, doesStack: false},
            {name: 'Xeric\'s Talisman', amount: 1, doesStack: false},
            {name: 'Ectophial', amount: 1, doesStack: false},
            {name: 'Camelot Teleport', amount: 1, doesStack: false},
            {name: 'Skills Necklace', amount: 1, doesStack: false},
        )

        return formatItems(itemstopush)

    }

    const pushItems = () => {
        let itemsoverflow = []
        let items = [
            ...pushTools('flower'),
            ...stackItems(pushSeeds()),
            ...pushTeleports()

        ]
        //pushTeleports() //teleport items.

        if (items.length >= 28) {
            itemsoverflow = items.splice(28, items.length-1)
            stackItems(itemsoverflow)
        }

        setInventory((previousInventory) => {
            let newInv = items.map(item => {
                return {'name': item.name, 'amount': item.amount, 'image': item.image}
            })
            return [...newInv, ...previousInventory.slice(newInv.length, 28)]
        })

    }

    pushItems()
};

export default InventoryGenerator;