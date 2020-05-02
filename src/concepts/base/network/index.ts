import { EventEmitter } from 'events'

export default class Network extends EventEmitter {
  private networkName
  private blockchain
  private nodes = []
  private miners = []
  constructor({ networkName, blockchain }) {
    super()
    this.networkName = networkName
    this.blockchain = blockchain
  }
  getNetworkName() {
    return this.networkName
  }
  getBlockchain() {
    return this.blockchain
  }
  getNodes() {
    return this.nodes
  }
  getMiners() {
    return this.miners
  }
  joinNetwork(node) {
    this.nodes.push(node)
    if (node.type === 'miner') {
      this.miners.push(node)
    }
  }
  syncHistory() {
    return this.blockchain.getChain()
  }
  submitValidBlock(node, block, hash) {
    //...
    this.blockchain.addBlock(block)
  }
}
