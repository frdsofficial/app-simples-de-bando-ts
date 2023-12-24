export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value   
      console.log(`Você depositou: ${value} reais.`)   
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && value <= this.balance){
      this.balance -= value
      console.log(`Você sacou: ${value} reais.`)
    }else{
      console.log(`Balanço insuficiente.`)
    }
  }

  getBalance = (): void => {
    console.log(`O balanço da conta é de ${this.balance} reais.`)
  }

  protected setBalance = (value: number): void =>{
    this.balance += value
    console.log(`O balanço da conta é de ${this.balance} reais.`)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida.')
  }
}
