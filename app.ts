import { CompanyAccount } from './class/CompanyAccount'
import { SpecialAccount } from './class/SpecialAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

console.log(peopleAccount)

peopleAccount.deposit(30)
peopleAccount.getBalance()
peopleAccount.getName()
peopleAccount.withdraw(30)

console.log(peopleAccount)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

console.log(companyAccount)

companyAccount.deposit(40)
companyAccount.getBalance()
companyAccount.getLoan(1000)
companyAccount.getName()
companyAccount.withdraw(500)

console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount("Felippe", 30)

console.log(specialAccount)

specialAccount.deposit(50)
specialAccount.getBalance()
specialAccount.getName()
specialAccount.withdraw(40)

console.log(specialAccount)


