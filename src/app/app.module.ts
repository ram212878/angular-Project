import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ColorchangerComponent } from './colorchanger/colorchanger.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CalculatorComponent, HeaderComponent, FooterComponent, ColorchangerComponent,],
  bootstrap: [AppComponent]
})
export class AppModule {}
