const crypto = require('crypto')
var JSEncrypt = require('jsencrypt').default;

function removeSpace(text){
    if(typeof text !== "string") throw new TypeError("Need text is string");
    return text.replace(/\s/g, "");
}

function encryptedStr(text) {
    if(typeof text !== "string") throw new TypeError("Need text is string");

    var encrypt = new JSEncrypt();
    var publicKey = '-----BEGIN PUBLIC KEY-----\n' +
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNNorgFngK1zjHOnQlIUh5NjOx\n' +
        'ZIiEPZ8Knu6B/IyY0LBRToo1TZC7/nK6j8on/2sBdv5nFuTwlOpW9UL8C4yZJdjT\n' +
        'wYXn5X+wZZsz1RXNI5zjhSXuGeYzF7WhxusKo6zrR6b0IMNg2W016PWU3UkjOXxo\n' +
        'aIGkMN77oIorPP5bHQIDAQAB\n' +
        '-----END PUBLIC KEY-----';
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(text);
}


module.exports = {
    removeSpace: removeSpace,
    encryptedStr: encryptedStr,
};
