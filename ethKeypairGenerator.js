var Web3 = require('web3');
var EthUtil = require('ethereumjs-util');

var web3 = new Web3;

var privateKey = `${web3.utils.sha3(process.argv[2])}`;


var hexToBytes = function(hex) {
	for (var bytes = [], c =0; c< hex.length; c += 2) {
		bytes.push(parseInt(hex.substr(c, 2), 16));

	}
	return bytes;
}

var publicKey = `0x${EthUtil.privateToAddress(hexToBytes(privateKey.substr(2, privateKey.length))).toString('hex')}`;

console.log('Private key: ' + privateKey + '\n' + 'Public key: ' + publicKey);
