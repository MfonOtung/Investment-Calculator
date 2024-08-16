import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0'; //because the value one will get from an input will always be a string even if a number was entered.
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5'; //default return value
  enteredDuration = '10';

  onSubmit () {
    console.log('SUBMITTED!');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  }

}
