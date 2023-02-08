const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    publicKey = publicKey.slice(1);
    const mHash = keccak256(publicKey);
    return mHash.slice(mHash.length-20);
}

module.exports = getAddress;