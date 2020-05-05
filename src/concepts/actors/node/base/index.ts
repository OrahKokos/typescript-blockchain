export default abstract class BaseNode {
  private network
  private blockchain
  constructor(network) {
    this.network = network
  }
  syncBlockchain(blockchain) {
    // find stored blockchain height
    // get new blockchain height
    // validate blockchain from x - last

    this.blockchain = blockchain
  }
  validateBlockCandidate(block) {
    // validate blockCandidate
  }
  validateBlockchain() {
    // validate chain
  }
  start() {
    this.syncBlockchain(this.network.getBlockchain())
  }
  stop() {
    // stop listener
  }
}
