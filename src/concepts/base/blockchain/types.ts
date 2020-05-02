import { IBlock } from '../block/types'

export interface BlockchainOpts {
  genesisBlock: IBlock
}

export interface IBlockchain {
  genesisBlock: IBlock
  constructor(opts: BlockchainOpts)
  getGenesisBlock(): IBlock
}
