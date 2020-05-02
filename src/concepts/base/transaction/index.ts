import { TransactionOps, ITransaction } from './types'

export default class Transaction implements ITransaction {
  private addressFrom
  private addressTo
  private amount
  private addressFromSign
  constructor({
    addressFrom,
    addressTo,
    amount,
    addressFromSign,
  }: TransactionOps) {
    this.addressFrom = addressFrom
    this.addressTo = addressTo
    this.amount = amount
    this.addressFromSign = addressFromSign
  }
  getAddressFrom() {
    return this.addressFrom
  }
  getAddressTo() {
    return this.addressTo
  }
  getAmount() {
    return this.amount
  }
  getSignature() {
    return this.addressFromSign
  }
}
