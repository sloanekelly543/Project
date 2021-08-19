Verify your contract on Binance Smart Chain
Install the plugin with npm
npm install -D truffle-plugin-verify
Make sure the version is >=v 0.5.4

Add the plugin to your truffle-config.js file
module.exports = {
  /* ... rest of truffle-config */

  plugins: [
    'truffle-plugin-verify'
  ]
}
Generate an API Key on your BSCscan account
If you don't have one yet, just go to this page to sign up.

Add your BSCscan API key to your truffle config

module.exports = {
  /* ... rest of truffle-config */

  api_keys: {
    bscscan: 'MY_API_KEY'
  }
}
Deploy your contract
truffle compile
truffle migrate --network testnet
Verify your contract
truffle run verify BEP20Token@{deployed-address} --network testnet