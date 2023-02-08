const Block = require('./Block');

class Blockchain {
    constructor() {
        const newBlock = new Block("Aradhya");
        this.chain = [ newBlock ];
        // addBlock(new Block("Alchemy"));
    }
    addBlock(block)
    {
        const prev = this.chain[this.chain.length-1];
        block.previousHash = prev.toHash();
        this.chain.push(block);
    }
    isValid()
    {
        for(let i=1; i<this.chain.length; ++i)
        {
            if (this.chain[i].previousHash.toString() !== this.chain[i-1].toHash().toString())
                return false;
        }
        return true;
    }
}

module.exports = Blockchain;