import { EventEmitter } from 'events'

import { NETWORK_EVENTS } from './constants'
import { MINER } from '../../actors/node/base/constants'

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
    if (node.type === MINER) {
      this.miners.push(node)
    }
    this.nodes.push(node)
    this.emit(NETWORK_EVENTS.NODE_JOINED, node)
  }
  broadcastBlock(block) {
    this.emit(NETWORK_EVENTS.BROADCAST_BLOCK, block)
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
