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
    "--none--",
    "background color",
    "Calculator",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7"
  ];

  parentColorChanger(val) {
    this.background = val;
  }
  enableComponent(event) {
    this.selectedComponent = event.target.value;
  }
}
