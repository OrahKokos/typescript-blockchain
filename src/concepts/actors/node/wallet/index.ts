import BaseNode from '../base'

export default class Wallet extends BaseNode {
  private publicKey
  private privateKey
  constructor({ network, publicKey, privateKey }) {
    super(network)
    if (publicKey) {
      this.publicKey = publicKey
      this.privateKey = privateKey
    }
  }
  generateKeys() {
    // generate keys
    const publicKey = 'some-public-key'
    const privateKey = 'some-private-key'
    return { publicKey, privateKey }
  }
  start() {
    if (!this.publicKey) throw new Error('Missing public key')
    if (!this.privateKey) throw new Error('Missing private key')
    super.start()
  }
  stop() {}
  syncBalance() {}
  getBalance() {}
  createTransaction() {}
}
