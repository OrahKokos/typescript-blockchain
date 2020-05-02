export interface ITransaction {}

export interface TransactionOps {
  addressFrom: string
  addressTo: string
  amount: number
  addressFromSign: string
}
