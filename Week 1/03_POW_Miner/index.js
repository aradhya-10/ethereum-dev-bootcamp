const sha256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const block = {id: blocks.length, transactions: [], nonce: 0};
    const txns = [];
    let limit = 0;
    for(; limit<mempool.length && limit<MAX_TRANSACTIONS; ++limit)
    {
        txns.push(mempool[limit]);
    }
    mempool.splice(0,limit);
    block.transactions = txns;
    let stBlk = JSON.stringify(block);
    let stBlkHsh = sha256(stBlk);
    while(BigInt(`0x${stBlkHsh}`)>=TARGET_DIFFICULTY)
    {
        block.nonce+=1;
        stBlk = JSON.stringify(block);
        stBlkHsh = sha256(stBlk);
    }
    block.hash = stBlkHsh;
    blocks.push(block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};