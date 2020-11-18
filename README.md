# Token Vortex

Token Vortex is an application that facilitates the transfer of value in the form of fungible ERC20 tokens between Ethereum smart contracts located on different test networks.

 ## Technical Specs
 - The client side is an Angular application hosted on Google Cloud via Firebase (free tier).
 - The server side is a Node based Express Generator application hosted on Heroku (free tier).
 - Account and contract data is stored and retrieved from a Mongodb database (free tier).
 - Ethers.js is used to interface with the Ethereum network. This is a simpler alternative to web3.js.
 - The gas for transactions is funded by the admin account. Ether for the test environments is generated via faucets. ( goerli, rinkeby, ropsten , kovan )
 - The TokenVortex contract was built using inherited ERC20 contracts from OpenZeppelin.
 - The contract was initially compiled using Truffle, flattened using Etherlime, then finally re-compiled and deployed in Remix.
  
 

## Glossary
- tkv2: TokenVortex v0.2.0
- tkv2bal: TokenVortex v0.2.0 balance
- tkv2tfri: TokenVortex v0.2.0 transfer internal: transfer tokens between accounts on the same blockchain
- tkv2tfre: TokenVortex v0.2.0 transfer external: transfer tokens between accounts on different blockchains
- tkv2txe: TokenVortex v0.2.0 transaction external: transaction relating to an external transfer
- tkv2txi: TokenVortex v0.2.0 transaction external: transaction relating to an internal transfer
- tkv2ballog: TokenVortex v0.2.0 balance log record
- tkv2tfrilog: TokenVortex v0.2.0 transfer internal log record
- tkv2tfrelog: TokenVortex v0.2.0 transfer external log record
- tkv2txelog: TokenVortex v0.2.0 transaction external log record
- tkv2txilog: TokenVortex v0.2.0 transaction external log record



