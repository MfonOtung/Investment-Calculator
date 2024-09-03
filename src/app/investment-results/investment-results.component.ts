//USING CROS-COMPONENT
/*import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';*/

/*@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})*/
/*export class InvestmentResultsComponent {
//results = input<{
  //year: number,
  //interest: number,
  //valueEndOfYear: number,
  //annualInvestment: number,
  //totalInterest: number,
  //totalAmountInvested: number,
//}[]>() 
//or use decorator
/*@Input() results?: {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}[];*/
//}*/


//USING SIGNAL

import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
 
  //To expose the result to the template, add a getter.
  get results() {
    return this.investmentService.resultData;

    //To expose the resultData from the service through the getter.
  }

}

