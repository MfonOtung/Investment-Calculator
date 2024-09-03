import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
//import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
//import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";


@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        //UserInputComponent, 
        InvestmentResultsComponent,
    ],
    //imports: [BrowserModule, FormsModule],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
    
})
export class AppModule {}