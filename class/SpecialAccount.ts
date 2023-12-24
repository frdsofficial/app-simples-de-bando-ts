import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor(name: string, accontNumber: number){
        super(name, accontNumber)

        this.deposit = (value: number): void => {
            this.setBalance(value + 10);     
            console.log(`Você depositou ${value} reais e ganhou + 10 reais.`)       
        }
    }
}