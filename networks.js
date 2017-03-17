var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('13fa372f'),
  addressVersion: 0x44,
  privKeyVersion: 128,
  P2SHVersion: 115,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('ffc04ef23eb8839870f371c068068544ef227e1548472da6aefb903174000000'),
    merkle_root: hex('8f2d39604893b2588767903bc075befec96f0883832a8ca62a102a680c64b394'),
    height: 0,
    nonce: 88473,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1465646666,
    bits: 504365055,
  },
  dnsSeeds: [
    '127.0.0.1',
	'5.196.70.166'
  ],
  defaultClientPort: 1337
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
