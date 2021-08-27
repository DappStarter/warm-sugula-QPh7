require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera foot dance recipe stick method coral light army ghost'; 
let testAccounts = [
"0xbf99782e9f71a0432616fefa1430b22b20b6d00d6406c5a0bd4f574f0665286d",
"0x2a30ed4eb12dd9e64e9febb27c2eed85107403edb62ae9b9e3dfe0c33f309abc",
"0x93d179725cf5c1e6f7324b614b5bc5a31dbf9ab6ed254dfd4da827a2fbeb2469",
"0xd22bd7d8d8c5f36f19b738356b88e01c21b3d28ab195488968c11421d1640e4b",
"0xa0c9c33de5635a592184e605b9f24162b0f31a2ed1062fe505f502c5e8f6cfb5",
"0x60a93c36459c89715c2bd878374670bc6d05a6916d035f1c4049b4d930c20edd",
"0x8b31c3de4e03840b537b3fcef80144b26b28dd495ee83ce24713c20174cd2af0",
"0x8266eee55cd4cf2b3574120f775015f498e8a81d45807522f07bafb3e79c0604",
"0x8af3e48d7a404b383dd4b66161aae6a9d0a132435a078687950e3b791df13f4a",
"0xabfe97c9d2528a4239ebeab1e355636cef17ed27c3821c15081de1441aa2b328"
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

