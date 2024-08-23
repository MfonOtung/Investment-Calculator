import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number, 
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number
  }>();  //or  calculate = output() 
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
    onSubmit () {
      this.calculate.emit({
        initialInvestment: +this.enteredInitialInvestment,
        duration: +this.enteredDuration,
        expectedReturn: +this.enteredExpectedReturn,
        annualInvestment: +this.enteredAnnualInvestment
      });
    }
    //To finally trigger this calculate investment results function in the app component, one has to listen to that emitted event (ouput) in the app component template by using event binding.
}
