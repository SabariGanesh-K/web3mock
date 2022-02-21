// 

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity:'0.8.0',
  networks:{
    ropsten : {
      url : 'https://eth-ropsten.alchemyapi.io/v2/2NtagPzjJaQyVUXUFIaaLcZpRsAwgZwV',
      accounts : [ 'c802753c7516b7c38d5db08fda3b3cb621fcba6366ea65d2ae17c8f87ef95761' ]
    }
  }
}
