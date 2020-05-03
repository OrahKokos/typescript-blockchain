import { EventEmitter } from 'events'

export default class Network extends EventEmitter {
  private networkName
  private blockchain
  private nodes = []
  private miners = []
  private blockSubmittions = []
  constructor({ networkName, blockchain }) {
    super()
    this.networkName = networkName
    this.blockchain = blockchain
    this.blockSubmittions = []
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
  broadcastBlock(block) {
    this.blockSubmittions.push(block)
    this.emit('broadcast-block', block)
  }
  confirmBlock(node, block) {
    // do stuff with blockSubmittions - sort by timestamp
    // check if all nodes voted
    // accept block with most votes
    // emit accepted block
    // emit new block
    // emit rejected blocks
  }
}
