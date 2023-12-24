import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  //meu código
  
  
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      console.log(`Você pegou um empréstimo de ${value} reais.`)
      this.setBalance(value)     
    }
  }
}
