import { ITransaction } from '../transaction/types'

export interface IBlock {}

export interface BlockOpts {
  height: number
  timestamp: Date
  transactions: ITransaction[]
  prevBlockHash: string
}
