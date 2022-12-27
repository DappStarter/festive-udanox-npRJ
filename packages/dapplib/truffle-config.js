require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note stereo method hover knock army gate'; 
let testAccounts = [
"0x28b82dc988467e8c29178c5485df0b31b487e399c49aec773bc008267f631c75",
"0x44b89a90fc53786d472546da03c474b36bafb1e1f51e3c682734944c0352ff79",
"0x38e05ea0e66709042db4d1c1aed17e614ae6c7761f099257b1b37d9161599571",
"0x68e9636c76f9c5c851049cfdc7fcf45f22ad22fd2bcf3041e88142fa0423e70a",
"0xa2bc128c4fb80f6aa752021e5f9cf144c010e5fb9bb1ba20c2b32e644b0cd22f",
"0xc113766e8ab1437618eb80434eebacf9838449697d7d0bfce9bd97700e943498",
"0x1637e657339f68554b48d33a46800429b25619a990ebea3a204f4f2d3c04806c",
"0x894bc2d8d9deb0a995cc98c7743ef3b3e1bd8061f31ba866fd74c903660836b9",
"0xccd73f4ae58f4edf81455d11b24a1da4742682c6acdb5bf826647c2acc37179e",
"0xc710590ef0aea7b70535c0abc4b40c069ba0754e0b31620bf9addc45697d11a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

