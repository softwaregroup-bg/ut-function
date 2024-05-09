const crypto = require('crypto');
const {bitShiftLeft, xor} = require('node-aes-cmac/lib/buffer-tools');

const const_Rb = Buffer.from('000000000000001B', 'hex'); // this is constant for Triple DES
const const_blockSize = 8; // Triple DES block size is 8 bytes

function generateSubkeys(key) {
    const l = des(key, Buffer.alloc(8));

    let subkey1 = bitShiftLeft(l);
    if (l[0] & 0x80) {
        subkey1 = xor(subkey1, const_Rb);
    }

    let subkey2 = bitShiftLeft(subkey1);
    if (subkey1[0] & 0x80) {
        subkey2 = xor(subkey2, const_Rb);
    }
    return { subkey1, subkey2 };
};

function des(key, message) {
    if (key.length === 32) {
        key += key.slice(0, 16);
    }
    const cipher = crypto.createCipheriv('des-ede3', Buffer.from(key, 'hex'), Buffer.alloc(0));
    const result = cipher.update(message);
    cipher.final();
    return result;
}

function des3Cmac(key, message) {
    const {subkey1, subkey2} = generateSubkeys(key);
    let blockCount = Math.ceil(message.length / const_blockSize);
    var lastBlockCompleteFlag, lastBlock;

    if (blockCount === 0) {
        blockCount = 1;
        lastBlockCompleteFlag = false;
    } else {
        lastBlockCompleteFlag = (message.length % const_blockSize === 0);
    }

    const lastBlockIndex = blockCount - 1;

    if (lastBlockCompleteFlag) {
        lastBlock = xor(getMessageBlock(message, lastBlockIndex), subkey1);
    } else {
        lastBlock = xor(getPaddedMessageBlock(message, lastBlockIndex), subkey2);
    }

    let x = Buffer.alloc(const_blockSize);
    let y;

    for (var index = 0; index < lastBlockIndex; index++) {
        y = xor(x, getMessageBlock(message, index));
        x = des(key, y);
    }

    y = xor(lastBlock, x);
    return des(key, y);
};

function getMessageBlock(message, blockIndex) {
    const block = Buffer.alloc(const_blockSize);
    const start = blockIndex * const_blockSize;
    const end = start + const_blockSize;
    message.copy(block, 0, start, end);
    return block;
}

function getPaddedMessageBlock(message, blockIndex) {
    const block = Buffer.alloc(const_blockSize);
    const start = blockIndex * const_blockSize;
    const end = message.length;
    block.fill(0);
    message.copy(block, 0, start, end);
    block[end - start] = 0x80;
    return block;
}

module.exports = {
    des3Cmac
};
