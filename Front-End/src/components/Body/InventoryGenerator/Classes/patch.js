let patchlist = []

class Patch {
    constructor({id, type, location}) {
        this.id = id;
        this.type = type;
        this.location = location;
        this.generateSeeds();
    }

    generateSeeds(seedlist) {
        let generatedseeds = []
        for (let num in seedlist) {
            if (seedlist[num].type !== this.type) {
            } else if ((seedlist[num].type === this.type) && (this.seeds === undefined)) {
                generatedseeds.push(seedlist[num]);
            } else if ((seedlist[num].type === this.type) && (this.seeds !== undefined)) {
                generatedseeds.push(seedlist[num]);
            }
            this.seeds = generatedseeds
        }
    };
    // not currently used, may get rid of this.
    minseed() {
        //this returns the smallest/largest level for the seeds in the patch
        let seedlist = [];
        for (let num in this.seeds) {
            seedlist.push(this.seeds[num].level);
        }
        //console.log((Math.min(...seedlist)));
    }
    maxseed(level, seedlist) {
        //this returns the largest seed that you can plant.
        let returnseed = seedlist.Babyseed // Baby seed is a placeholder seed
        for (let num in this.seeds) {
            let seed = this.seeds[num];
            if ((seed.level <= level) &&
                (seed.level >= returnseed.level)) {
                returnseed = this.seeds[num]
            }
        }
        return returnseed;
    }
}

export default Patch
export { patchlist }