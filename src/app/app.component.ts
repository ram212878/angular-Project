import { Component, Output, EventEmitter, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Geeks";
  background = "";
  selectedComponent = "";
  componentBtn = [
    {
      componentName: "none",
      name: "--none--"
    },
    {
      componentName: "colorchanger-component",
      name: "background color"
    },
    {
      componentName: "calculator-component",
      name: "calculator"
    }
  ];

  parentColorChanger(val) {
    this.background = val;
  }
  enableComponent(event) {
    this.selectedComponent = event.value;
  }
}
