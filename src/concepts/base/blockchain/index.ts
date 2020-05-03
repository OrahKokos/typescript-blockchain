import { EventEmitter } from 'events'

import { BlockchainOpts } from './types'
import { IBlock } from '../block/types'

import { BLOCK_EVENTS } from './constants'

export default class Blockchain extends EventEmitter {
  private genesisBlock: IBlock
  private storage: IBlock[] = []
  constructor({ genesisBlock }: BlockchainOpts) {
    super()
    this.genesisBlock = genesisBlock
  }
  getChain(): IBlock[] {
    return this.storage
  }
  getGenesisBlock(): IBlock {
    return this.genesisBlock
  }
  getCurrentBlockPosition(): number {
    return this.storage.length - 1
  }
  getBlock(position: number): IBlock {
    return this.storage[position]
  }
  getCurrentBlock(): IBlock {
    return this.getBlock(this.getCurrentBlockPosition())
  }
  addBlock(block: IBlock): void {
    this.storage.push(block)
    this.emit(BLOCK_EVENTS.ADD_BLOCK, block)
  }
}
