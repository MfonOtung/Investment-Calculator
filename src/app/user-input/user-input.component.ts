//USING CROSS-COMPONENT
/*import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

/*@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})*/
/*export class UserInputComponent {
  // @Output() calculate = new EventEmitter<{
  //   initialInvestment: number, 
  //   duration: number, 
  //   expectedReturn: number, 
  //   annualInvestment: number
  // }>();  //or  calculate = output() 
  // enteredInitialInvestment = '0'; //because the value one will get from an input will always be a string even if a number was entered.
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5'; //default return value
  // enteredDuration = '10';

  @Output() calculate = new EventEmitter<InvestmentInput>();  //or  calculate = output() 
  enteredInitialInvestment = '0'; //because the value one will get from an input will always be a string even if a number was entered.
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5'; //default return value
  enteredDuration = '10';

 /*  onSubmit () {
    console.log('SUBMITTED!');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  } */

      //The emitted output is then used on onSubmit; and to convert string to number in angular, + is added as shown below
    /*onSubmit () {
      this.calculate.emit({
        initialInvestment: +this.enteredInitialInvestment,
        duration: +this.enteredDuration,
        expectedReturn: +this.enteredExpectedReturn,
        annualInvestment: +this.enteredAnnualInvestment
      });
    }*/
    //To finally trigger this calculate investment results function in the app component, one has to listen to that emitted event (ouput) in the app component template by using event binding.
//}*/


//USING SIGNAL:
import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<InvestmentInput>();
  //calculate = output<InvestmentInput>();  
  enteredInitialInvestment = signal('0'); 
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5'); 
  enteredDuration = signal('10');

      
  //Service is reached through "onSubmit" and made available through a constructor.

  constructor(private investmentService: InvestmentService) {}

    onSubmit () {
      this.investmentService.calculateInvestmentResults({
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        expectedReturn: +this.enteredExpectedReturn(),
        annualInvestment: +this.enteredAnnualInvestment()
      });
      this.enteredInitialInvestment.set('0'); 
      this.enteredAnnualInvestment.set('0');
      this.enteredExpectedReturn.set('5'); 
      this.enteredDuration.set('10');
    }
    
}

