import { EventEmitter } from 'events'

import { BlockchainOpts } from './types'
import { IBlock } from '../block/types'

export default class Blockchain extends EventEmitter {
  private genesisBlock: IBlock
  private storage: IBlock[] = []
  constructor({ genesisBlock }: BlockchainOpts) {
    super()
    this.genesisBlock = genesisBlock
  }
  getGenesisBlock(): IBlock {
    return this.genesisBlock
  }
  getCurrentBlockPosition(): number {
    return this.storage.length - 1
  }
  getCurrentBlock(): IBlock {
    return this.storage[this.getCurrentBlockPosition()]
  }
  getBlock(position: number): IBlock {
    return this.storage[position]
  }
  addBlock(block: IBlock): void {
    this.storage.push(block)
  }
  getChain(): IBlock[] {
    return this.storage
  }
}
