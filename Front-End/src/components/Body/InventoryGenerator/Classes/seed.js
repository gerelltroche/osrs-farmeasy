let seedlist = []

class Seed {
    constructor({ name, level, xp, type, doesStack = false}) {
        this.name = name + ' seed'
        this.level = level;
        this.xp = xp;
        this.type = type;
    }

    getItemData() { //checking each type to add stacking and the amount of seeds per plant
        if (this.type === 'herb') {
            this.doesStack = true;
            this.amount = 1;
        }
        if (this.type === 'allotment') {
            this.doesStack = true;
            this.amount = 3;
        }
        if (this.type === 'flower') {
            this.doesStack = true;
            this.amount = 1;
        }
        if (this.type === 'hops') {
            this.doesStack = true;
            if (this.name.includes('jute')) {
                this.amount = 3;
            } else this.amount = 4;
        }
        if (this.type === 'bush') {
            this.doesStack = true;
            this.amount = 1;
        }
        if (this.type.includes('tree')) {
            this.amount = 1;
        }
        //console.log(`${this.name} was created it is${this.doesStack ? '' : 'n\'t'} stackable. (${this.amount})`)
    }
}

export default Seed
export { seedlist }