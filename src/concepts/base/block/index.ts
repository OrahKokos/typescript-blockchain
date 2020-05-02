import { BlockOpts } from './types'

export default class Block {
  private transactions
  private prevBlockHash
  private height
  private timestamp
  private hash
  constructor({ height, timestamp, transactions, prevBlockHash }: BlockOpts) {
    this.height = height
    this.timestamp = timestamp
    this.transactions = transactions
    this.prevBlockHash = prevBlockHash
  }
  setHash(hash) {
    this.hash = hash
  }
  getHash() {
    return this.hash
  }
  getHeight() {
    return this.height
  }
  getTimestamp() {
    return this.timestamp
  }
  getTransactions() {
    return this.transactions
  }
  getPreviousBlockHash() {
    return this.prevBlockHash
  }
}
