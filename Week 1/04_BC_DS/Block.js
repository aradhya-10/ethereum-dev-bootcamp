const sha256 = require('crypto-js/sha256');

class Block {
    data= "";
    previousHash="";
    constructor(data)
    {
        this.data=data;
        this.previousHash="";
    }
    toHash() {
        return sha256(this.data+`0x${this.previousHash}`);
    }
}

module.exports = Block;
