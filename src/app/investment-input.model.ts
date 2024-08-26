export interface InvestmentInput {
    initialInvestment: number; 
    duration: number; 
    expectedReturn: number; 
    annualInvestment: number;
  } 

//or

//   export type InvestmentInput = {
//     initialInvestment: number; 
//     duration: number; 
//     expectedReturn: number; 
//     annualInvestment: number;
//   }

//Note: To make it available outside this file, it has to be "exported"