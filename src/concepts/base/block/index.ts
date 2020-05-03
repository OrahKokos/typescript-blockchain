import { BlockOpts } from './types'

export default class Block {
  private transactions
  private prevBlockHash
  private timestamp
  private hash
  private transactionsData
  constructor({ timestamp, transactions, prevBlockHash }: BlockOpts) {
    this.timestamp = timestamp
    this.transactions = transactions
    this.prevBlockHash = prevBlockHash
    this.transactionsData = JSON.stringify(transactions)
  }
  setHash(hash) {
    this.hash = hash
  }
  getPreviousBlockHash() {
    return this.prevBlockHash
  }
  getHash() {
    return this.hash
  }
  getTimestamp() {
    return this.timestamp
  }
  getTransactions() {
    return this.transactions
  }
  getBlockData() {
    return this.transactionsData
  }
}
