export default class BlockExplorer {
  private networks = []
  private blockExplorerName
  constructor({ blockExplorerName }) {
    this.blockExplorerName = blockExplorerName
  }
  getName() {
    return this.blockExplorerName
  }
  getNetworks() {
    return this.networks
  }
  getNetwork(index) {
    return this.networks[index]
  }
  addNetwork(network) {
    this.networks.push(network)
  }
}
